import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const {dispatch } = useContext(AppContext);

    const changeCurrency = (val)=>{
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val,
        })
    }
  return (
        <select style = {{backgroundColor:'#97e499',padding:'13px',borderRadius:'7px',borderColor:'#97e499',color:'white'}}  name="Currency" id="Currency" onChange={event=>changeCurrency(event.target.value)}>
            <option value="" selected disabled>Currency (£ Pound)</option>
            <option value="$" style={{color:'black'}}>$ Dollar</option>
            <option value="£" style={{color:'black'}}>£ Pound</option>
            <option value="€" style={{color:'black'}}>€ Euro</option>
            <option value="₹" style={{color:'black'}}>₹ Ruppee</option>
        </select>
    );
};

export default Currency;