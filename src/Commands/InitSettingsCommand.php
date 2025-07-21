<?php

namespace Rochmadnf\Cli\Commands;

use function Termwind\render;

class InitSettingsCommand
{
    public function run(): void
    {
        $externalSettings = getcwd() . '/settings.json';

        if (file_exists($externalSettings)) {
            render('<div class="text-red font-bold">Inisialisasi sudah dilakukan sebelumnya!</div>');
            return;
        }

        // ✅ Perbaikan di sini
        if (\Phar::running()) {
            $internalSettings = 'phar://' . \Phar::running(false) . '/data/settings.json';
        } else {
            $internalSettings = __DIR__ . '/../../data/settings.json';
        }

        // Debug opsional (bisa dihapus nanti)
        render("<div class='text-yellow'>Mencari: $internalSettings</div>");

        if (!file_exists($internalSettings)) {
            render('<div class="text-red font-bold">File settings.json tidak ditemukan di internal app!</div>');
            return;
        }

        copy($internalSettings, $externalSettings);

        render('<div class="text-green font-bold">Berhasil mengekstrak settings.json ke luar PHAR.</div>');
    }
}
