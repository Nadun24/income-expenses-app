import React, {useEffect, useState} from 'react';
import axios from "axios";

const IncomeListTable = () => {

    const [availableIncomes, setAvailableIncomes] = useState([])

    useEffect(() => {
        fetchGetAllIncomes()

    }, []);

    const fetchGetAllIncomes = async () =>{
        try{
            const response = await axios.get('api/getAllIncome')
            const {data} = response.data
            setAvailableIncomes(data)

        }catch (error){
            console.log(error)
        }

    }


    return (
        <div>


            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Id
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Income Amount
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Income Category
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                        {availableIncomes.length > 0 && availableIncomes.map((incomeDetails) => (

                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200" key={incomeDetails.id}>
                                <th scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {incomeDetails.id}
                                </th>
                                <td className="px-6 py-4">
                                    {incomeDetails.income_amount}
                                </td>
                                <td className="px-6 py-4">
                                    {incomeDetails.income_category}
                                </td>
                                <td className="px-6 py-4">
                                    <a href="#"
                                       className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default IncomeListTable;
