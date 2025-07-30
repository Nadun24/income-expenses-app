import axios from 'axios'

export const addNewIncome = incomeDetails => {
    return axios.post('http://127.0.0.1:8000/api/add-income', incomeDetails)
}

export const updateIncome = (incomeId, incomeDetails) => {
    return axios.put(
        `http://127.0.0.1:8000/api/update-income/${incomeId}`,
        incomeDetails
    )
}

export const getAllIncomes = () => {
    return axios.get(`api/getAllIncome`)
}

export const deleteIncome = incomeId => {
    return axios.delete(`api/delete-income/${incomeId}`)
}
