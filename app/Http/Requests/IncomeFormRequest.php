<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Support\Facades\Response;

class IncomeFormRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'income_amount' => 'required|numeric|min:1',
            'income_category' => 'required|string',
        ];
    }

    public function failedValidation(Validator|\Illuminate\Support\Facades\Validator $validator)
    {
        $response = response()->json([
           "status" => \Symfony\Component\HttpFoundation\Response::HTTP_UNPROCESSABLE_ENTITY,
            "error" => $validator->errors(),
        ]);

        throw  new HttpResponseException($response);


    }
}
