<?php

namespace App\Override;

use Spatie\Mjml\Mjml;
use Symfony\Component\Process\ExecutableFinder;

class MjmlPhp extends Mjml
{

    protected function getCommand(array $arguments): array
    {
        return [
            (new ExecutableFinder())->find('node', env('NODE_PATH', 'node')),
            'mjml.mjs',
            json_encode(array_values($arguments)),
        ];
    }
}
