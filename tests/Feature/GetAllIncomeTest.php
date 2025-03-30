<?php

use App\Models\Income;
use Tests\TestCase;
final class GetAllIncomeTest extends TestCase
{
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
           'status' => true,
           'data'=> $income1,$income2, $income3
        ]);
    }
}
