<?php

namespace App\Http\Controllers;
use App\Action\Income\AddIncome;
use App\Action\Income\GetIncome;
use App\Http\Requests\IncomeFormRequest;
use Illuminate\Http\JsonResponse;
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
}
