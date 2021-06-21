import React, { useState } from 'react';

import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

const ExpensesList = props => {
    
    if(props.items.length === 0){
        return <h2 className="expenses-list__fallback">No expenses found.</h2>
    }

    //console.log(props.items);
    return <ul className="expenses-list">
        {props.items.map((expense) =>(
        <ExpenseItem 
            title={expense.title}
            keys={expense.id} 
            amount={expense.amount} 
            date={expense.date}/>))}
    </ul>

}

export default ExpensesList; 