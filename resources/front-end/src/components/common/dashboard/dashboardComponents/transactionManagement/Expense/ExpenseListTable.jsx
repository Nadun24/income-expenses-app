import React, { useEffect, useState } from "react";
import { use } from "react";
import {
    deleteExpense,
    getAllExpenses,
} from "../../../../../../utilities/api/ExpenseApi/ExpenseApi";

const ExpenseListTable = () => {
    const [availableExpenses, setAvailableExpenses] = useState([]);

    useEffect(() => {
        fetchGetAllExpenses();
    }, []);

    const fetchGetAllExpenses = async () => {
        try {
            const response = await getAllExpenses();
            console.log("Response from getAllExpenses:", response);
            const { data } = response.data;
            setAvailableExpenses(data);
            console.log("Available Expenses:", typeof data);
            console.log("Available Expenses:", availableExpenses);
        } catch (error) {
            console.log(error);
        }
    };

    const onDelete = async (details) => {
        try {
            await deleteExpense(details.id);
            fetchGetAllExpenses();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                No
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Id
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Expense Amount
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Expense Category
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {availableExpenses.length > 0 &&
                            availableExpenses.map(
                                (expenseDetails, index) => (
                                    console.log(
                                        "Expense Details:",
                                        expenseDetails,
                                    ),
                                    (
                                        <tr
                                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
                                            key={expenseDetails.id}
                                        >
                                            <th
                                                scope="row"
                                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                            >
                                                {index + 1}
                                            </th>
                                            <th
                                                scope="row"
                                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                            >
                                                {expenseDetails.id}
                                            </th>
                                            <td className="px-6 py-4">
                                                {expenseDetails.expense_amount}
                                            </td>
                                            <td className="px-6 py-4">
                                                {
                                                    expenseDetails.expense_category
                                                }
                                            </td>
                                            <td className="px-6 py-4 ">
                                                <button
                                                    type="button"
                                                    // onClick={() =>
                                                    //     onEdit(expenseDetails)
                                                    // }
                                                    className="mr-8 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                                                >
                                                    Edit
                                                </button>

                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        onDelete(expenseDetails)
                                                    }
                                                    className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                ),
                            )}
                        {availableExpenses.length === 0 && (
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                                <td
                                    colSpan="4"
                                    className="px-6 py-4 text-center text-gray-500"
                                >
                                    No income records available.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ExpenseListTable;
