<?php

use App\Http\Controllers\ExpenseController;
use App\Http\Controllers\IncomeController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/test-api', function () {
    return response()->json([
        'test' => 'test'
    ]);
});
Route::post('/add-income', [IncomeController::class, 'addIncome']);
Route::get('/getAllIncome', [IncomeController::class, 'getAllIncome']);
Route::put('/update-income/{income}', [IncomeController::class, 'updateIncome']);
Route::delete('/delete-income/{income}', [IncomeController::class, 'deleteIncome']);

// expense API routes
Route::post('/add-expense', [ExpenseController::class, 'store']);
Route::get('/getAllExpenses', [ExpenseController::class, 'getAllExpenses']);
Route::put('/update-expense/{expense}', [ExpenseController::class, 'updateExpense']);
Route::delete('/delete-expense/{expense}', [ExpenseController::class, 'deleteExpense']);
