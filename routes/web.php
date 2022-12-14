<?php

use App\Events\ChatMessageSent;
use App\Http\Controllers\{ChatController, HomeController};
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware('auth')->group(function () {
    Route::get('/', HomeController::class);

    Route::controller(ChatController::class)->prefix('chats')->group(
        function () {
            Route::get('/{user:username}', 'show')->name("chats.show");
            Route::post('/{user:username}', 'store')->name("chats.store");
        }
    );
});
require __DIR__ . '/auth.php';
