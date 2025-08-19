<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Expense extends Model
{
    protected $fillable = [
        'expense_amount',
        'expense_category',
        'expense_description',
        'expense_date',
    ]; 
}
