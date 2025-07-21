<?php

namespace Rochmadnf\Cli\Commands;

use function Laravel\Prompts\text;
use function Termwind\render;

class HelloCommand
{
    public function run(): void
    {
        $name = text('What is your name?');

        $appName = config('app.name', 'My PHP CLI');

        // Tampilkan output
        render(<<<HTML
            <div class="text-blue">
                Hello <span class="font-bold">$name</span>, have a nice day.
                <div class="text-green">Application: <span class="font-bold">$appName</span></div>
            </div>
        HTML);
    }
}
