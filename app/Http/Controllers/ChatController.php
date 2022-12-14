<?php

namespace App\Http\Controllers;

use App\Events\ChatMessageSent;
use App\Models\{Chat, User};
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ChatController extends Controller
{
    public function show(User $user)
    {
        $chats =
            Chat::where(
                fn ($query) => $query->where('sender_id', Auth::id())->where('receiver_id', $user->id)
            )->orWhere(
                fn ($query) => $query->where('sender_id', $user->id)->where('receiver_id', Auth::id())
            )->orderBy('created_at')->get();

        //FIXME: group chat by date like whatsapp conversation ->groupBy(fn ($query) => Carbon::parse($query->created_at, 'UTC')->timezone("Asia/Makassar")->format('d-m-Y'));

        return inertia('Chats/Show', compact('user', 'chats'));
    }

    public function store(Request $request, User $user)
    {
        $request->validate([
            'messages' => ['required', 'string'],
        ]);

        $chat = Auth::user()->chats()->create([
            'receiver_id' => $user->id,
            'messages' => $request->messages,
        ]);

        broadcast(new ChatMessageSent($chat))->toOthers();

        return back();
    }
}
