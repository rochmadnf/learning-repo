<?php

namespace Rochmadnf\Cli\Commands;

use function Termwind\{render, ask};

class GetNameCommand
{
    public function run(): void
    {
        $name = ask('<span class="text-green">Masukkan nama Anda: </span>');
        render(<<<HTML
            <div class="mt-1 text-blue">Halo, <span class="font-bold">$name</span>!</div>
        HTML);
    }
}
