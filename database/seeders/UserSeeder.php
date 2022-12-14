<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        collect([
            [
                'name' => 'Rochmad',
                'username' => 'rochmad23',
                'email' => 'rochmad@example.com',
                'email_verified_at' => now()->subDay(rand(1, 100)),
                'remember_token' => str()->random(10),
                'password' => bcrypt('password'),
            ],
            [
                'name' => 'Nurul',
                'username' => 'nurul07',
                'email' => 'nurul@example.com',
                'email_verified_at' => now()->subDay(rand(1, 100)),
                'remember_token' => str()->random(10),
                'password' => bcrypt('password'),
            ],
        ])->each(fn ($user) => User::create($user));

        User::factory()->count(10)->create();
    }
}
