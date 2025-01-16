<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class IncomeController extends Controller
{
    public function addIncome(): JsonResponse
    {
        return response()->json([]);
    }
}
