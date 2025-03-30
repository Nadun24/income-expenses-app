<?php

namespace App\Action\Income;

class GetIncome
{
    public function __invoke():array
    {
        return [
            'status' => "true",
            'data' => ''
        ];
    }
}
