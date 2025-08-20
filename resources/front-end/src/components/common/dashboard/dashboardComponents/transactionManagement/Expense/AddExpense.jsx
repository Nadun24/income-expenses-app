import React, { useState } from "react";
import AddNewExpense from "./AddNewExpense.jsx";
import ExpenseListTable from "./ExpenseListTable.jsx";

import axios from "axios";
import { addNewExpense } from "../../../../../../utilities/api/ExpenseApi/ExpenseApi.jsx";

const AddExpense = () => {
    const defaultExpenseDetails = {
        expense_amount: 0,
        expense_category: "",
    };

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [expenseDetails, setExpenseDetails] = useState(defaultExpenseDetails);
    const [message, setMessage] = useState("");
    const [isExpenseAmountFieldEmpty, setExpenseAmountFieldEmpty] =
        useState(false);
    const [isExpenseCategoryEmpty, setIsExpenseCategoryEmpty] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);

    const handleModalOpenAndClose = () => {
        setIsModalOpen((prevState) => !prevState);
    };

    const handleExpenseDetailsChange = (event) => {
        const { name, value } = event.target;
        setIsExpenseCategoryEmpty(false);
        setExpenseAmountFieldEmpty(false);
        setExpenseDetails((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!expenseDetails.expense_amount) {
            setExpenseAmountFieldEmpty(true);
            return;
        }
        if (!expenseDetails.expense_category) {
            setIsExpenseCategoryEmpty(true);
            return;
        }

        try {
            let response;

            // if (isEditMode && editingIncomeId) {
            //     response = await updateIncome(editingIncomeId, incomeDetails);
            // } else {
            response = await addNewExpense(expenseDetails);
            // }

            if (response.status === 200) {
                console.log("✅ Expense Added Successfully!");

                // const { message } = response.data;
                // setMessage(message);
                setIsModalOpen(false);
                // setIsEditMode(false);
                // setEditingIncomeId(null);
                setExpenseDetails(defaultExpenseDetails);
                window.location.reload();
            }
        } catch (error) {
            console.error("Error adding/updating income:", error);
            setMessage("Failed to add/update income");
        }
    };

    return (
        <div>
            <div className="p-4 sm:ml-64">
                <div className="p-4 ">
                    <div className=" mb-4">
                        <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                            <button
                                type="button"
                                onClick={handleModalOpenAndClose}
                                className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800 bg-black"
                            >
                                Add New Expense
                            </button>
                        </div>

                        <AddNewExpense
                            isModalOpen={isModalOpen}
                            handleModalOpenAndClose={handleModalOpenAndClose}
                            handleExpenseDetailsChange={
                                handleExpenseDetailsChange
                            }
                            handleSubmit={handleSubmit}
                            isExpenseAmountFieldEmpty={
                                isExpenseAmountFieldEmpty
                            }
                            isExpenseCategoryEmpty={isExpenseCategoryEmpty}
                        />
                    </div>
                    <ExpenseListTable />
                </div>
            </div>
        </div>
    );
};

export default AddExpense;
