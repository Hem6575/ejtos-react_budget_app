import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import NumericInput from 'react-numeric-input';

const Budget = () => {
    const {currency, expenses, budget} = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    return (
        <div className='alert alert-secondary' style={{flex:1}}>
            <span>Budget: {currency} <NumericInput step={10} min={totalExpenses} max={20000} value={budget}/></span>
        </div>
    );
};
export default Budget;