import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const AllocationForm = (props) => {
    const { dispatch, remaining, currency  } = useContext(AppContext);
    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
    const [action, setAction] = useState('');

    const min = 0;
    const max = remaining;

    const handleChange = event => {
        const value = Math.max(min, Math.min(max, Number(event.target.value)));
        setCost(value);
        if((value+1) > remaining){
            alert("The value cannot exceed remaining funds "+currency+" "+remaining);
        }
    };

    const submitEvent = () => {

        if(cost > remaining) {
            alert("The value cannot exceed remaining funds "+currency+" "+remaining);
            setCost("");
            return;
        }

        const expense = {
            name: name,
            cost: parseInt(cost),
        };

        if(action === "Reduce") {
            dispatch({
                type: 'RED_EXPENSE',
                payload: expense,
            });
        } else {
            dispatch({
                type: 'ADD_EXPENSE',
                payload: expense,
            });
        }
    };

    return (
        <div>
            <div className='row'>

            <div className="input-group mb-3" style={{ marginLeft: '2rem',flex:"1" }}>
                    <div className="input-group-prepend">
                <label className="input-group-text" htmlFor="inputGroupSelect01">Department</label>
                  </div>
                  <select className="custom-select" id="inputGroupSelect01" onChange={(event) => setName(event.target.value)}>
                        <option defaultValue>Choose...</option>
                        <option value="Marketing" name="marketing"> Marketing</option>
                <option value="Sales" name="sales">Sales</option>
                <option value="Finance" name="finance">Finance</option>
                <option value="HR" name="hr">HR</option>
                <option value="IT" name="it">IT</option>
                <option value="Admin" name="admin">Admin</option>
                  </select>

                    <div className="input-group-prepend" style={{ marginLeft: '2rem' }}>
                <label className="input-group-text" htmlFor="inputGroupSelect02">Allocation</label>
                  </div>
                  <select className="custom-select" id="inputGroupSelect02" onChange={(event) => setAction(event.target.value)}>
                        <option defaultValue value="Add" name="Add">Add</option>
                <option value="Reduce" name="Reduce">Reduce</option>
                  </select>
                    <InputGroup className="mb-3" style={{flexWrap:"initial !important"}}>
                        <InputGroup.Text>{currency}</InputGroup.Text>
                        <Form.Control required='required'
                            type='number'
                            id='cost'
                            value={cost}
                            onChange={handleChange} style={{flex:"0 1 14%"}}/>
                    </InputGroup>

                    <button className="btn btn-primary" onClick={submitEvent} style={{ marginLeft: '2rem' }}>
                        Save
                    </button>
                </div>
                </div>

        </div>
    );
};

export default AllocationForm;