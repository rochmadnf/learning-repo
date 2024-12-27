<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Article>
 */
class ArticleFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_id' => Models\User::factory(),
            'category_id' => rand(1, 7),
            'title' => $title = fake()->sentence(),
            'slug' => str()->of($title)->slug()->value,
            'teaser' => fake()->paragraph(),
            'content' => fake()->paragraphs(4, true),
            'status' => $status = fake()->randomElement(['draft', 'pending', 'published']),
            'published_at' => $status === 'published' ? fake()->dateTimeBetween('-1 month', 'now') : null,
        ];
    }
}
