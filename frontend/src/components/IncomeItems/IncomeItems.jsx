import React, { useState } from 'react';
import { dateFormat } from '../../utils/dateFormat';
import './IncomeItem.css';
import { bitcoin, book, calender, card, circle, clothing, comment, dollar, edit, food, freelance, medical, money, piggy, stocks, takeaway, trash, tv, users, yt } from '../../utils/Icon';
import Button from '../button/Button';

import EditForm from '../Form/EditForm/Form'; 

function IncomeItem({
    id,
    title,
    amount,
    date,
    category,
    description,
    deleteItem,
    indicatorColor,
    type
}) {
    const [isEditing, setIsEditing] = useState(false);

    const categoryIcon = () => {
        switch(category) {
            case 'salary':
                return money;
            case 'freelancing':
                return freelance;
            case 'investments':
                return stocks;
            case 'stocks':
                return users;
            case 'bitcoin':
                return bitcoin;
            case 'bank':
                return card;
            case 'youtube':
                return yt;
            case 'other':
                return piggy;
            default:
                return '';
        }
    };

    const expenseCatIcon = () => {
        switch (category) {
            case 'education':
                return book;
            case 'groceries':
                return food;
            case 'health':
                return medical;
            case 'subscriptions':
                return tv;
            case 'takeaways':
                return takeaway;
            case 'clothing':
                return clothing;
            case 'travelling':
                return freelance;
            case 'other':
                return circle;
            default:
                return '';
        }
    };

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleCancelEdit = () => {
        setIsEditing(false);
    };

    const handleSaveEdit = (id,updatedExpense) => {
        setIsEditing(false);
    };

    return (
        <main className='main_item' indicator={indicatorColor}>
            <div className='items'>
                {isEditing ? (
                    <EditForm
                        id={id}
                        title={title}
                        amount={amount}
                        isIncome={true}
                        category={category}
                        description={description}
                        onCancel={handleCancelEdit}
                        onSave={handleSaveEdit}
                    />
                ) : (
                    <>
                        <div className="items-header">
                            <div className='name-logo'>
                                <div className="icon">
                                    {type === 'expense' ? expenseCatIcon() : categoryIcon()}
                                </div>
                                <h5>{title}</h5>
                            </div>
                            
                            <div className="btn-con">
                                <Button 
                                    icon={trash}
                                    bPad={'1rem'}
                                    bRad={'50%'}
                                    bg={'var(--primary-color)'}
                                    color={'#fff'}
                                    iColor={'#fff'}
                                    hColor={'var(--color-green)'}
                                    onClick={() => deleteItem(id)}
                                />
                                <Button 
                                    icon={edit}
                                    bPad={'1rem'}
                                    bRad={'50%'}
                                    bg={'var(--primary-green)'}
                                    color={'#fff'}
                                    iColor={'#fff'}
                                    hColor={'var(--color-green)'}
                                    onClick={handleEditClick}
                                />
                            </div>
                        </div>
                        <div className="content">
                            <div className="inner-content">
                                <div className="text">
                                    <p>{dollar} {amount}</p>
                                    <p>{calender} {dateFormat(date)}</p>
                                    <p>
                                        {comment}
                                        {description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </main>
    );
}

export default IncomeItem;
