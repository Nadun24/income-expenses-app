import React from 'react'
import FormSuccessAlert from '../../../../alert/FormSuccessAlert.jsx'

const AddNewIncome = ({
    isModalOpen,
    handleModalOpenAndClose,
    message,
    handleSubmit,
    handleIncomeDetailsChange,
    isIncomeAmountFieldEmpty,
    isIncomeCategoryEmpty,
    isEditMode,
    incomeDetails
}) => {
    return (
        <>
            <div
                id='default-modal'
                tabIndex='-1'
                aria-hidden='true'
                className={
                    isModalOpen
                        ? 'm-9  overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0  z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full'
                        : 'hidden'
                }
            >
                <div className='relative  p-4 m-auto w-full max-w-2xl max-h-full'>
                    <div className='relative bg-white rounded-lg shadow-sm dark:bg-gray-700'>
                        <div className='flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200'>
                            <h3 className='text-xl font-semibold text-gray-900 dark:text-white'>
                                {isEditMode ? 'Edit Income' : 'Add New Income'}
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
                                        stroke-linecap='round'
                                        stroke-linejoin='round'
                                        stroke-width=''
                                        d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
                                    />
                                </svg>
                                <span className='sr-only'>Close modal</span>
                            </button>
                        </div>

                        <div className=' h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800'>
                            <section className='bg-white dark:bg-gray-900'>
                                <div className='py-1 w-3/4 m-auto lg:py-16'>
                                    <FormSuccessAlert message={message} />
                                    <form onSubmit={handleSubmit}>
                                        <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
                                            <div className='sm:col-span-2'>
                                                <label
                                                    htmlFor='name'
                                                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                                                >
                                                    Income Amount
                                                </label>
                                                <input
                                                    type='number'
                                                    name='income_amount'
                                                    id='income_amount'
                                                    onChange={
                                                        handleIncomeDetailsChange
                                                    }
                                                    value={
                                                        incomeDetails.income_amount ||
                                                        ''
                                                    }
                                                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 '
                                                    placeholder='Income Amount'
                                                    required=''
                                                />
                                                {isIncomeAmountFieldEmpty && (
                                                    <p className='text-red-500'>
                                                        Income amount required
                                                    </p>
                                                )}
                                            </div>

                                            <div>
                                                <label
                                                    htmlFor='category'
                                                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                                                >
                                                    Category
                                                </label>
                                                <select
                                                    id='category'
                                                    name='income_category'
                                                    value={
                                                        incomeDetails.income_category ||
                                                        ''
                                                    }
                                                    onChange={
                                                        handleIncomeDetailsChange
                                                    }
                                                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5  '
                                                >
                                                    <option selected=''>
                                                        Select Income Type
                                                    </option>
                                                    <option value='salary'>
                                                        Salary
                                                    </option>
                                                    <option value='sideproject'>
                                                        Side Project
                                                    </option>
                                                    <option value='freelance'>
                                                        Freelance
                                                    </option>
                                                    <option value='onlineclass'>
                                                        Online Class
                                                    </option>
                                                </select>
                                                {isIncomeCategoryEmpty && (
                                                    <p className='text-red-500'>
                                                        {' '}
                                                        Income category required
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                        <button
                                            type='submit'
                                            className='inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800 bg-black'
                                        >
                                            {isEditMode
                                                ? 'Update Income'
                                                : 'Add Income'}
                                        </button>
                                    </form>
                                </div>
                                <div></div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddNewIncome
