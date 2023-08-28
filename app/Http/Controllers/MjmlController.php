<?php

namespace App\Http\Controllers;

use App\Mail\WelcomeMail;
use App\Traits\MjmlTrait as TraitsMjmlTrait;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class MjmlController extends Controller
{
    use TraitsMjmlTrait;
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        Mail::html(
            $this->mjmlParse('welcome', ['name' => $request->name]),
            function ($message) {
                $message->to('rochmadnf@protonmail.com')
                    ->subject('Welcome');
            }
        );

        return response()->json("success");
    }
}
