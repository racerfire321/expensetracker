import React, { useState } from 'react';
import { useGlobalContext } from '../../../context/GlobalContext';
import './EditForm.css';

const EditForm = ({ id, title, amount, date, category, description, onCancel, isIncome }) => {
    const [editedTitle, setEditedTitle] = useState(title);
    const [editedAmount, setEditedAmount] = useState(amount);
    const [editedDate, setEditedDate] = useState(date);
    const [editedCategory, setEditedCategory] = useState(category);
    const [editedDescription, setEditedDescription] = useState(description);
    const { editIncome, editExpense } = useGlobalContext(); // Assuming useGlobalContext provides editIncome and editExpense

    const handleSubmit = async (event) => {
        event.preventDefault();
        const updatedData = {
            title: editedTitle,
            amount: editedAmount,
            date: editedDate,
            category: editedCategory,
            description: editedDescription
        };
        
        try {
            if (isIncome) {
                await editIncome(id, updatedData);
            } else {
                await editExpense(id, updatedData);
            }
        } catch (error) {
            console.error('Error during edit:', error);
        }
        
        onCancel();
    };
        
       

    return (
        <form onSubmit={handleSubmit} className='editform'>
            <div>
                <label>Title</label>
                <input type="text" value={editedTitle} onChange={(e) => setEditedTitle(e.target.value)} />
            </div>
            <div>
                <label>Amount</label>
                <input type="number" value={editedAmount} onChange={(e) => setEditedAmount(e.target.value)} />
            </div>
            <div>
                <label>Date</label>
                <input type="date" value={editedDate} onChange={(e) => setEditedDate(e.target.value)} />
            </div>
            <div>
                <label>Category</label>
                <input type="text" value={editedCategory} onChange={(e) => setEditedCategory(e.target.value)} />
            </div>
            <div>
                <label>Description</label>
                <input type="text" value={editedDescription} onChange={(e) => setEditedDescription(e.target.value)} />
            </div>
            <button type="submit">Save</button>
            <button type="button" onClick={onCancel}>Cancel</button>
        </form>
    );
};

export default EditForm;
