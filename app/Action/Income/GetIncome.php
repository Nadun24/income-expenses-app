<?php

namespace App\Action\Income;

use App\Services\ResponseFactory\CommonResponse;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class GetIncome
{
    public function __invoke(): array
    {
        $allIncomes = $this->getAllIncomes();

        // if($allIncomes->isEmpty()){
        //     return CommonResponse::returnNotFoundResponse();
        // }

        return CommonResponse::returnSuccessResponse($allIncomes);
    }

    /**
     * @return Collection
     */
    private function getAllIncomes(): Collection
    {
        return DB::table('Income')->select('id', 'income_category', 'income_amount')->get();
    }
}
