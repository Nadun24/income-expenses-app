import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {
    addNewIncome,
    updateIncome
} from '../../../../../../utilities/api/AddIncomeApi/IncomeApi.jsx'
import FormSuccessAlert from '../../../../alert/FormSuccessAlert.jsx'
import AddNewIncome from './AddNewIncome.jsx'
import IncomeListTable from './IncomeListTable.jsx'

const AddIncome = () => {
    const defaultIncomeDetails = {
        income_amount: 0,
        income_category: ''
    }
    const [incomeDetails, setIncomeDetails] = useState(defaultIncomeDetails)

    const [message, setMessage] = useState('')
    const [isIncomeAmountFieldEmpty, setIncomeAmountFieldEmpty] =
        useState(false)
    const [isIncomeCategoryEmpty, setIsIncomeCategoryEmpty] = useState(false)
    const [isModalOpen, setIsModelOpen] = useState(false)
    const [isEditMode, setIsEditMode] = useState(false)
    const [editingIncomeId, setEditingIncomeId] = useState(null)

    const handleIncomeDetailsChange = event => {
        //destructuring
        const { name, value } = event.target

        setIsIncomeCategoryEmpty(false)
        setIncomeAmountFieldEmpty(false)

        setIncomeDetails(prevState => ({ ...prevState, [name]: value }))
    }

    const handleSubmit = async event => {
        event.preventDefault()

        if (!incomeDetails.income_amount) {
            setIncomeAmountFieldEmpty(true)
            return
        }
        if (!incomeDetails.income_category) {
            setIsIncomeCategoryEmpty(true)
            return
        }

        try {
            let response

            if (isEditMode && editingIncomeId) {
                response = await updateIncome(editingIncomeId, incomeDetails)
            } else {
                response = await addNewIncome(incomeDetails)
            }

            if (response.status === 200) {
                const { message } = response.data
                setMessage(message)
                setIsModelOpen(false)
                setIsEditMode(false)
                setEditingIncomeId(null)
                setIncomeDetails(defaultIncomeDetails)
                window.location.reload()
            }
        } catch (error) {
            console.error('Error adding/updating income:', error)
            setMessage('Failed to add/update income')
        }
    }

    const handleModalOpenAndClose = () => {
        // if (!isOpen) {
        //     setIsModelOpen(false)
        // }else {
        //     setIsModelOpen(true)
        // }
        setIsModelOpen(prevState => !prevState)
        setMessage('')
        setIsEditMode(false)
        setEditingIncomeId(null)
        setIncomeDetails(defaultIncomeDetails)
    }

    const handleEditClick = income => {
        setIncomeDetails({
            income_amount: income.income_amount,
            income_category: income.income_category
        })
        setEditingIncomeId(income.id)
        setIsEditMode(true)
        setIsModelOpen(true)
    }

    return (
        <div>
            <div className='p-4 sm:ml-64'>
                <div className='p-4 '>
                    <div className='grid  gap-4 mb-4'>
                        <div className='flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800'>
                            <button
                                type='button'
                                onClick={() => handleModalOpenAndClose()}
                                className='inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800 bg-black'
                            >
                                Create New Income
                            </button>
                        </div>
                    </div>

                    <AddNewIncome
                        isModalOpen={isModalOpen}
                        handleModalOpenAndClose={handleModalOpenAndClose}
                        message={message}
                        handleSubmit={handleSubmit}
                        handleIncomeDetailsChange={handleIncomeDetailsChange}
                        isIncomeAmountFieldEmpty={isIncomeAmountFieldEmpty}
                        isIncomeCategoryEmpty={isIncomeCategoryEmpty}
                        isEditMode={isEditMode}
                        incomeDetails={incomeDetails}
                    />
                </div>
                <IncomeListTable onEdit={handleEditClick} />
            </div>
        </div>
    )
}

export default AddIncome
