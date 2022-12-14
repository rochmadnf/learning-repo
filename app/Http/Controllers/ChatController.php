<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ChatController extends Controller
{
    public function show(User $user)
    {
        return inertia('Chats/Show', [
            "user" => $user,
        ]);
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
