<?php

namespace App\Action\Expense;

use App\Services\ResponseFactory\CommonResponse;
use Illuminate\Support\Facades\DB;

class GetAllExpense
{
    public function __invoke(): array
    {
        $allExpenses = $this->getAllExpenses();

        // if($allExpenses->isEmpty()){
        //     return CommonResponse::returnNotFoundResponse();
        // }

        return CommonResponse::returnSuccessResponse($allExpenses);
    }

    /**
     * @return \Illuminate\Support\Collection
     */
    private function getAllExpenses(): \Illuminate\Support\Collection
    {
        return DB::table('expenses')->select('id', 'expense_category', 'expense_amount')->get();
    }
}
