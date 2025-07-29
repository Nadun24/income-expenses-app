<?php

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
