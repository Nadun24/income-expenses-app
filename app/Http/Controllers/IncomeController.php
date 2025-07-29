<?php

namespace App\Http\Controllers;

use App\Action\Income\AddIncome;
use App\Action\Income\GetIncome;
use App\Http\Requests\IncomeFormRequest;
use App\Models\Income;
use Illuminate\Database\Eloquent\Casts\Json;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class IncomeController extends Controller
{
    public function addIncome(IncomeFormRequest $request, AddIncome $addIncome): JsonResponse
    {
        Log::info($request);
        $validatedData = $request->validated();

        return response()->json($addIncome($validatedData));
    }

    public function getAllIncome(GetIncome $getIncome): JsonResponse
    {
        return response()->json($getIncome());
    }

    public function updateIncome(Income $income, IncomeFormRequest $request): JsonResponse
    {
        $validatedData = $request->validated();
        $income->update($validatedData);

        return response()->json([
            'status' => 'success',
            'message' => 'Income updated successfully',
        ]);
    }

    public function deleteIncome(Income $income): JsonResponse
    {
        $income->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'Income deleted successfully',
        ]);
    }
}
