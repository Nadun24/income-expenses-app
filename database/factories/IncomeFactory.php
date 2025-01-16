<?php

namespace Database\Factories;

use App\Models\Income;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Income>
 */
class IncomeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'income_amount'=> $this->faker->randomFloat(2,1000,100000),
            'income_category' => $this->faker->randomElement(['salary','side_project','youtube_reva'])
        ];
    }
}
