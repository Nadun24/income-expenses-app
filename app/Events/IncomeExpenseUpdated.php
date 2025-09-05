<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Queue\SerializesModels;

class IncomeExpenseUpdated implements ShouldBroadcast
{
    use SerializesModels;

    public $totalIncome;
    public $totalExpense;

    public function __construct($totalIncome, $totalExpense)
    {
        $this->totalIncome = $totalIncome;
        $this->totalExpense = $totalExpense;
    }

    public function broadcastOn()
    {
        return new Channel('dashboard');
    }
}
