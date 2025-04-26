import React, {useEffect, useState} from 'react';
import axios from "axios";
import {addNewIncome} from "../../../../../utilities/api/AddIncomeApi/IncomeApi.jsx";

const AddIncome = () => {

    const [incomeDetails, setIncomeDetails]  = useState({
        income_amount:0,
        income_category:''
    })

    const [message, setMessage] = useState("")
    const [isIncomeAmountFieldEmpty ,  setIncomeAmountFieldEmpty] = useState(false)
    const [isIncomeCategoryEmpty, setIsIncomeCategoryEmpty] = useState(false)

    const handleIncomeDetailsChange = (event) => {
        //destructuring
        const {name, value} = event.target;

        setIsIncomeCategoryEmpty(false);
        setIncomeAmountFieldEmpty(false);

        setIncomeDetails( (prevState) => (
            {...prevState,[name]:value}
            ))
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

         if(!incomeDetails.income_amount){
             setIncomeAmountFieldEmpty(true)
             return
         }
         if(!incomeDetails.income_category){
             setIsIncomeCategoryEmpty(true)
             return
         }
        const response =  await addNewIncome(incomeDetails)

        const {message} = response.data
        setMessage(message)
    }


    return (
        <div>

            <div className="p-4 sm:ml-64">
                <div className="p-4 ">
                    <div className="grid  gap-4 mb-4">
                        <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                            <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Add Income</h2>
                        </div>
                        {/*<div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">*/}
                        {/*<p className="text-2xl text-gray-400 dark:text-gray-500">*/}
                        {/*        <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"*/}
                        {/*             fill="none" viewBox="0 0 18 18">*/}
                        {/*            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"*/}
                        {/*                  stroke-width="2" d="M9 1v16M1 9h16"/>*/}
                        {/*        </svg>*/}
                        {/*    </p>*/}
                        {/*</div>*/}

                    </div>
                    <div className=" h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
                        <section className="bg-white dark:bg-gray-900">
                            <div className="py-1 w-3/4 m-auto lg:py-16">

                                {message && <div id="alert-3"
                                                 className="flex items-center p-4 mb-4 text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
                                                 role="alert">
                                    <svg className="shrink-0 w-4 h-4" aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                                    </svg>
                                    <span className="sr-only">Info</span>
                                    <div className="ms-3 text-sm font-medium">
                                        {message}
                                    </div>
                                    <button type="button"
                                            className="ms-auto -mx-1.5 -my-1.5 bg-green-50 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-green-400 dark:hover:bg-gray-700"
                                            data-dismiss-target="#alert-3" aria-label="Close">
                                        <span className="sr-only">Close</span>
                                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                             fill="none" viewBox="0 0 14 14">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                  stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                        </svg>
                                    </button>
                                </div>}
                                <form onSubmit={handleSubmit}>
                                    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                                        <div className="sm:col-span-2">
                                            <label htmlFor="name"
                                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                                Income Amount</label>
                                            <input type="number" name="income_amount" id="income_amount"
                                                   onChange={handleIncomeDetailsChange}
                                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
                                                   placeholder="Type product name" required=""/>
                                            {isIncomeAmountFieldEmpty && <p className="text-red-500">Income amount required</p>}
                                        </div>


                                        <div>
                                            <label htmlFor="category"
                                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                                            <select
                                                id="category"
                                                name="income_category"
                                                onChange={handleIncomeDetailsChange}
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5  ">
                                                <option selected="">Select Income Type</option>
                                                <option value="salary">Salary</option>
                                                <option value="sideproject">Side Project</option>
                                                <option value="freelance">Freelance</option>
                                                <option value="onlineclass">Online Class</option>
                                            </select>
                                            {isIncomeCategoryEmpty && <p className="text-red-500"> Income category required</p>}
                                        </div>

                                    </div>
                                    <button type="submit"
                                            className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800 bg-black">
                                        Add Income
                                    </button>
                                </form>
                            </div>
                        <div>
                        </div>
                        </section>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AddIncome;
