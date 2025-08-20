import axios from "axios";

export const addNewExpense = (expenseDetails) => {
    return axios.post("http://127.0.0.1:8000/api/add-expense", expenseDetails);
};

export const getAllExpenses = () => {
    return axios.get("http://127.0.0.1:8000/api/getAllExpenses");
};

export const deleteExpense = (expenseId) => {
    return axios.delete(
        `http://127.0.0.1:8000/api/delete-expense/${expenseId}`,
    );
};
