import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import NumericInput from 'react-numeric-input';

const Budget = () => {
    const {currency, expenses, budget} = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const minVal = totalExpenses;
    const maxVal = 20000;

    const handleExceedError = targetVal => {
        const value = Math.max(minVal, Math.min(maxVal, Number(targetVal)));
        if((value+11) > maxVal){
            alert("The value cannot exceed the maximum limit which is "+currency+" 20000");
        }
        if(value === minVal){
            alert("You cannot reduce the budget value lower than the spending");
        }
    };
    return (
        <div className='alert alert-secondary' style={{flex:1}}>
            <span>Budget: {currency} <NumericInput step={10} min={minVal} max={maxVal} value={budget}  onChange={handleExceedError} /></span>
        </div>
    );
};
export default Budget;