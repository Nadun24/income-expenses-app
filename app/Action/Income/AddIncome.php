<?php

namespace App\Action\Income;

use App\Models\Income;

class AddIncome
{
    public function __Invoke(array $validatedData): array
    {
        Income::create([
            'income_amount' => $validatedData['income_amount'],
            'income_category' =>   $validatedData['income_category'],
        ]);

        $totalIncome = \App\Models\Income::sum('amount');
        $totalExpense = \App\Models\Expense::sum('amount');

        event(new \App\Events\IncomeExpenseUpdated($totalIncome, $totalExpense));
        return [
            'message' => 'Income added successfully'
        ];
    }
}
