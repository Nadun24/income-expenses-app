<?php

namespace App\Http\Controllers;

use App\Action\Expense\AddExpense;
use App\Action\Expense\GetAllExpense;
use App\Http\Requests\ExpenseRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Models\Expense;

class ExpenseController extends Controller
{
    // store expense
    public function store(ExpenseRequest $request, AddExpense $addExpense): JsonResponse
    {
        // log the request data
        \Log::info('Expense Request Data:', $request->all());
        $validatedData = $request->validated();
        return response()->json($addExpense($validatedData));
    }

    public function getAllExpenses(GetAllExpense $getAllExpense): JsonResponse
    {
        return response()->json($getAllExpense());
    }

    public function deleteExpense(Expense $expense){
        
        // delete the expense
        $expense->delete();
        
        // return a success response
        return response()->json(['message' => 'Expense deleted successfully']);
    }
}
