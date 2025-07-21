<?php

namespace Rochmadnf\Cli;

use Rochmadnf\Cli\Commands\GetNameCommand;
use Rochmadnf\Cli\Commands\HelloCommand;

use function Termwind\render;

class Kernel
{
    public function handle(?string $command): void
    {
        switch ($command) {
            case 'get-name':
                new GetNameCommand()->run();
                break;

            case 'hello':
                new HelloCommand()->run();
                break;

            default:
                render('<div class="text-red">Perintah tidak dikenal. Coba: get-name | hello</div>');
                break;
        }
    }
}
