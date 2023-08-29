import React, { useContext } from 'react';
import { FaRegTimesCircle } from 'react-icons/fa';
import { AppContext } from '../context/AppContext';
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";

const ExpenseItem = (props) => {
    const { currency,dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }
    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'DECREASE_EXPENSE',
            payload: expense
        });

    }
    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><FaPlusCircle style={{color:"#4fac5c",fontSize:"30px"}} onClick={event=> increaseAllocation(props.name)} /></td>
        <td><FaMinusCircle style={{color:"red",fontSize:"30px"}} onClick={event=> decreaseAllocation(props.name)} /></td>
        <td><FaRegTimesCircle size='1.5em' onClick={handleDeleteExpense}></FaRegTimesCircle></td>
        </tr>
    );
};

export default ExpenseItem;