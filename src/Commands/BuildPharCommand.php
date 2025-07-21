<?php

namespace Rochmadnf\Cli\Commands;

use function Termwind\render;

class BuildPharCommand
{
    public function run(): void
    {
        // Cek apakah sedang berjalan dari dalam PHAR
        if (\Phar::running()) {
            render('<div class="text-red font-bold">Perintah build tidak dapat dijalankan dari dalam PHAR!</div>');
            return;
        }

        $pharFile = 'app.phar';

        try {
            // Pastikan phar.readonly = Off
            if (ini_get('phar.readonly')) {
                render('<div class="text-red font-bold">Gagal: Aktifkan phar.write di php.ini (phar.readonly=Off)</div>');
                return;
            }

            // Pastikan folder data/ ada
            if (!is_dir(__DIR__ . '/../../data')) {
                render('<div class="text-red font-bold">Folder data/ tidak ditemukan! Pastikan settings.json tersedia.</div>');
                return;
            }

            // Hapus file lama jika ada
            if (file_exists($pharFile)) {
                unlink($pharFile);
                render("<div class='text-yellow'>File lama $pharFile dihapus, membuat ulang...</div>");
            }

            // Buat PHAR baru
            $phar = new \Phar($pharFile);

            // Build semua file penting
            $phar->buildFromDirectory(
                __DIR__ . '/../../',
                '/(artisan|spark|src|vendor|data|composer\.json)/'
            );

            // Set stub ke file entry point (ubah sesuai nama file CLI Anda)
            $entryPoint = file_exists(__DIR__ . '/../../spark') ? 'spark' : 'artisan';
            $phar->setStub("#!/usr/bin/env php\n" . $phar->createDefaultStub($entryPoint));

            render("<div class='text-green font-bold'>Berhasil membuat $pharFile ✅</div>");
        } catch (\Exception $e) {
            render("<div class='text-red font-bold'>Error saat build: {$e->getMessage()}</div>");
        }
    }
}
