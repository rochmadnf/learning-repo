<?php

namespace App\Http\Controllers;

use App\Models\{Chat, User};
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ChatController extends Controller
{
    public function show(User $user)
    {
        $chats = Chat::where(
            fn ($query) => $query->where('sender_id', Auth::id())->where('receiver_id', $user->id)
        )->orWhere(
            fn ($query) => $query->where('sender_id', $user->id)->where('receiver_id', Auth::id())
        )->orderBy('created_at')->get();

        return inertia('Chats/Show', compact('user', 'chats'));
    }

    public function store(Request $request, User $user)
    {
        $request->validate([
            'messages' => ['required', 'string'],
        ]);

        Auth::user()->chats()->create([
            'receiver_id' => $user->id,
            'messages' => $request->messages,
        ]);

        return back();
    }
}
