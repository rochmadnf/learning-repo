<?php

namespace Rochmadnf\Cli;

use function Termwind\render;

class Kernel
{
    public function handle(?string $command): void
    {
        switch ($command) {
            case 'get-name':
                (new Commands\GetNameCommand())->run();
                break;

            case 'hello':
                (new Commands\HelloCommand())->run();
                break;

            case 'init-settings': // Perbaikan nama perintah sesuai fungsinya
                (new Commands\InitSettingsCommand())->run();
                break;

            case 'select-date':
                (new Commands\SelectDateCommand())->run();
                break;

            case 'build':
                (new Commands\BuildPharCommand())->run();
                break;

            case 'get-api':
                (new Commands\GetApiCommand())->run();
                break;

            default:
                $this->showAvailableCommands();
                break;
        }
    }

    /**
     * Tampilkan daftar command yang tersedia (lebih informatif)
     */
    private function showAvailableCommands(): void
    {
        render('<div class="text-red mb-1">Perintah tidak dikenal!</div>');
        render('<div class="text-blue underline">Perintah yang tersedia:</div>');
        render('<div>- get-name</div>');
        render('<div>- hello</div>');
        render('<div>- init-settings</div>');
        render('<div>- build</div>');
    }
}
