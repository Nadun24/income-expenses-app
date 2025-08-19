import React, { useState } from 'react';
import { AddNewExpense } from './AddNewExpense';

const AddExpense = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalOpenAndClose =() => {
       setIsModalOpen(prevState => !prevState)
        // console.log('isModalOpen', isModalOpen)
        
    }



    return (
        <div>
            <div className="p-4 sm:ml-64">
                <div className="p-4 ">
                    <div className=" mb-4">
                        <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                            <button
                                type='button'
                                onClick={handleModalOpenAndClose}
                                className='inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800 bg-black'
                            >
                                Add New Expense
                            </button>
                        </div>
                        
                    <AddNewExpense 
                        isModalOpen={isModalOpen}
                        handleModalOpenAndClose={handleModalOpenAndClose}
                    />

                    </div>
                    {/* <div className=" h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
                        <section className="bg-white dark:bg-gray-900">
                            <div className="py-1 w-3/4 m-auto lg:py-16">

                                <form action="#">
                                    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                                        <div className="sm:col-span-2">
                                            <label htmlFor="name"
                                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                                Expense Amount</label>
                                            <input type="number" name="incomeAmount" id="incomeAmount"
                                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                                   placeholder="Type product name" required=""/>
                                        </div>


                                        <div>
                                            <label htmlFor="category"
                                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                                            <select id="category"
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                                <option selected="">Select Income Type</option>
                                                <option value="salary">Salary</option>
                                                <option value="sideproject">Side Project</option>
                                                <option value="freelance">Freelance</option>
                                                <option value="onlineclass">Online Class</option>
                                            </select>
                                        </div>

                                    </div>
                                    <button type="submit"
                                            className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800 bg-black">
                                        Add Expense
                                    </button>
                                </form>
                            </div>
                        </section>
                    </div> */}

                </div>
            </div>
        </div>
    );
};

export default AddExpense;
