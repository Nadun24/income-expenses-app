import React from 'react'

export const AddNewExpense = ({
    isModalOpen,
    handleModalOpenAndClose
}) => {
  return (
    <div>
        


<div id="default-modal" tabIndex="-1" aria-hidden="true" className={
    
isModalOpen ? 
"flex overflow-y-auto overflow-x-hidden fixed inset-0 z-50  justify-center items-center w-full h-full bg-black bg-opacity-50 backdrop-blur-sm" : "hidden"
}>
    <div className="relative p-4 w-full max-w-2xl max-h-full">
        <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Add New Expense
                </h3>
                 <button
                                type='button'
                                onClick={() => handleModalOpenAndClose()}
                                className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white'
                                data-modal-hide='default-modal'
                            >
                                <svg
                                    className='w-3 h-3'
                                    aria-hidden='true'
                                    xmlns='http://www.w3.org/2000/svg'
                                    fill='none'
                                    viewBox='0 0 14 14'
                                >
                                    <path
                                        stroke='currentColor'
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth='2'
                                        d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
                                    />
                                </svg>
                                <span className='sr-only'>Close modal</span>
                            </button>
            </div>
            <div className=" h-48 mb-4 bg-gray-50 dark:bg-gray-800">
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
                    </div>
           
        </div>
    </div>
</div>


    </div>
  )
}
