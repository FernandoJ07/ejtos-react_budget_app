import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {

    const { budget, dispatch, expenses } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const handleBudget = (event) => {
        const newBudget = event.target.value;
        if(totalExpenses > newBudget){
            alert("You cannot reduce the budget value lower than the spending");
        } else if (newBudget > 20000){
            alert("a");
        } else {
            dispatch({type: "SET_BUDGET", payload:newBudget });
        }

    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: £</span>
            <input type='number' step="10" value={budget} onChange={handleBudget}></input>
        </div>
    );
};

export default Budget;
