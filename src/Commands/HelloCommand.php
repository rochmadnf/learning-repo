<?php

namespace Rochmadnf\Cli\Commands;

use function Termwind\render;

class HelloCommand
{
    public function run(): void
    {
        render(<<<HTML
        <div>
            <div>🍃 Termwind</div>
            <hr>
            <p>Give your CLI apps a unique look</p>
            </div>
        HTML);
    }
}
