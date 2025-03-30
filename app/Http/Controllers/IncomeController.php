<?php

namespace App\Http\Controllers;
use App\Action\Income\AddIncome;
use App\Action\Income\GetIncome;
use App\Http\Requests\IncomeFormRequest;
use Illuminate\Http\JsonResponse;

class IncomeController extends Controller
{
    public function addIncome(IncomeFormRequest $request, AddIncome $addIncome): JsonResponse
    {
        $validatedData = $request->validated();

        return response()->json($addIncome($validatedData));
    }

    public function getAllIncome(GetIncome $getIncome): JsonResponse
    {
        return response()->json($getIncome());
    }
}
