<?php

namespace Rochmadnf\Cli\Commands;

use GuzzleHttp\Client;

use function Laravel\Prompts\spin;
use function Laravel\Prompts\table;
use function Termwind\render;

class GetApiCommand
{
    public function run(): void
    {
        try {
            $client = new Client([
                'base_uri' => 'https://jsonplaceholder.typicode.com', // API contoh
                'timeout'  => 10.0, // Timeout 10 detik
            ]);

            $response = spin(
                callback: fn () => $client->get('/users'),
                message: 'Fetching response...'
            );

            $data = array_map(
                fn ($item) => [
                'name' => $item['name'],
                'username' => $item['username'],
                'website' => $item['website']
                ],
                json_decode($response->getBody()->getContents(), true)
            );

            table(headers: ['Nama', 'Username', 'Website'], rows: $data);
        } catch (\Exception $e) {
            render("<div class='text-red font-bold'>Error: {$e->getMessage()}</div>");
        }
    }
}
