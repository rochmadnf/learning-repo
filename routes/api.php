<?php

use App\Http\Controllers\Auth\{LoginController, MeController, RegisterController};
use Illuminate\Support\Facades\Route;

Route::post('/register', RegisterController::class);
Route::post('/login', LoginController::class);

Route::middleware('auth:sanctum')->group(function () {
    Route::get('me', MeController::class);
});
