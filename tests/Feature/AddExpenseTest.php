<?php



final class AddExpenseTest extends TestCase
{
    use RefreshDatabase;

    public function test_expense_and_category_database_save()
    {
        //A - Arrange
        // dummy data that we need to do the test
        $expense = Expense::factory()->make()->toArray();

        //A - Action
        $response = $this->post('/api/add-expense', $expense);

        //A - Assertion
        $response->assertStatus(200);
        $response->assertJsonStructure([
            "message",
        ]);
        $response->assertSimilarJson([
            "message" => "Expense added successfully",
        ]);

        $this->assertDatabaseHas('expenses', [
            'x' => $expense['expense_amount'],
            'expense_category' => $expense['expense_category'],
        ]);
    }

    public function test_return_bad_response_if_not_existing_expense_amount()
    {
        // Arranger
        $expense = Expense::factory()->make([
            "expense_amount" => 0,
        ])->toArray();
        
        // Action
        $response = $this->post('/api/add-expense', $expense);

        // Assertion
        $response->assertStatus(200);
        $response->assertJsonStructure([
            'status',
            'error',
        ]);
        $response->assertSimilarJson([
            'status' => 422,
            'error' => [
                'expense_amount' => ["The expense amount field must be at least 1."],
            ]
        ]);
    }
}