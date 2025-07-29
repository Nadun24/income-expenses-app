import React, { useEffect, useState } from 'react'
import axios from 'axios'

const IncomeListTable = ({ onEdit }) => {
    const [availableIncomes, setAvailableIncomes] = useState([])

    useEffect(() => {
        fetchGetAllIncomes()
    }, [])

    const fetchGetAllIncomes = async () => {
        try {
            const response = await axios.get('api/getAllIncome')
            const { data } = response.data
            setAvailableIncomes(data)
        } catch (error) {
            console.log(error)
        }
    }

    const onDelete = async details => {
        try {
            const response = await axios.delete(
                `api/delete-income/${details.id}`
            )
            if (response.status === 200) {
                fetchGetAllIncomes()
            }
        } catch (error) {
            console.error('Error deleting income:', error)
        }
    }

    return (
        <div>
            <div className='relative overflow-x-auto'>
                <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700'>
                    <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                        <tr>
                            <th scope='col' className='px-6 py-3'>
                                Id
                            </th>
                            <th scope='col' className='px-6 py-3'>
                                Income Amount
                            </th>
                            <th scope='col' className='px-6 py-3'>
                                Income Category
                            </th>
                            <th scope='col' className='px-6 py-3'>
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {availableIncomes.length > 0 &&
                            availableIncomes.map(incomeDetails => (
                                <tr
                                    className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200'
                                    key={incomeDetails.id}
                                >
                                    <th
                                        scope='row'
                                        className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
                                    >
                                        {incomeDetails.id}
                                    </th>
                                    <td className='px-6 py-4'>
                                        {incomeDetails.income_amount}
                                    </td>
                                    <td className='px-6 py-4'>
                                        {incomeDetails.income_category}
                                    </td>
                                    <td className='px-6 py-4'>
                                        <button
                                            type='button'
                                            onClick={() =>
                                                onEdit(incomeDetails)
                                            }
                                            className='focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900'
                                        >
                                            Edit
                                        </button>

                                        <button
                                            type='button'
                                            onClick={() =>
                                                onDelete(incomeDetails)
                                            }
                                            className='ml-2 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default IncomeListTable
