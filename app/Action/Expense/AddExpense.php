<?php

namespace App\Action\Expense;

use App\Models\Expense;

class AddExpense
{

    public function __invoke(array $validatedData): array
    {
        // Assuming you have an Expense model similar to Income
        Expense::create([
            'expense_amount' => $validatedData['expense_amount'],
            'expense_category' => $validatedData['expense_category'],
            'expense_date' => $validatedData['expense_date'] ?? now(), // Default to current date if not provided
            'expense_description' => $validatedData['expense_description'] ?? null, // Optional field
        ]);

        return [
            'message' => 'Expense added successfully'
        ];
    }
}
