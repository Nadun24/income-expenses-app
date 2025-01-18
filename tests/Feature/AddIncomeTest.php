<?php
namespace Tests\Feature;

use App\Models\Income;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

// final class can not create child code
final class AddIncomeTest extends TestCase
{
    use RefreshDatabase;
    public function test_income_and_category_database_save()
    {
        //A - Arrange
        // dummy data that we need to do the test
        $income = Income::factory()->make()->toArray();

        //A - Action
        $response = $this->post('/api/add-income', $income);

        //A - Assertion
        $response->assertStatus(200);
        $response->assertJsonStructure([
            "message",
        ]);
        $response->assertSimilarJson([
            "message" => "Income added successfully",
        ]);

        $this->assertDatabaseHas('income',[
           'income_amount' => $income['income_amount'],
           'income_category' => $income['income_category'],
        ]);
    }


}
