<?php

use App\Models\Income;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
final class GetAllIncomeTest extends TestCase
{
    use RefreshDatabase;
    // write test case
    public function test_get_all_income()
    {
        // A - arrange
        $income1 = Income::factory()->create();
        $income2 = Income::factory()->create();
        $income3 = Income::factory()->create();


        // A - Act/ action
        $response = $this->get('/api/getAllIncome');

        // A - Assertion
        $response->assertStatus(200);
        $response->assertJsonStructure(
            [
                'status',
                'data'
            ]
        );
        $response->assertSimilarJson([
           'status' => 200,
           'data'=> [
               [
               'id' => $income1->id,
               'income_amount' => $income1->income_amount,
               'income_category' => $income1->income_category,

                ],
               [
                   'id' => $income2->id,
                   'income_amount' => $income2->income_amount,
                   'income_category' => $income2->income_category,
               ],
               [
                   'id' => $income3->id,
                   'income_amount' => $income3->income_amount,
                   'income_category' => $income3->income_category,
               ]
           ]
        ]);
    }


    public function test_return_not_found_message_if_not_existing_incomes()
    {
//        A - Arrange the data

//        A - Action
        $response = $this->get('/api/getAllIncome');


//        A - Assertion
        $response->assertStatus(200);
        $response->assertJsonStructure([
            'status',
            'data'
        ]);
        $response->assertSimilarJson([
            'status' => 404,
            'data' => 'Income not found'
        ]);
    }
}
