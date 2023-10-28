import React, {useContext, useState} from "react";
import {AppContext} from '../context/AppContext';
import {v4 as uuidv4} from 'uuid';
import { type } from "@testing-library/user-event/dist/type";
const AddExpense = () => {

    const {dispatch} = useContext(AppContext);

    const [name, setName] = useState('');
    const [cost, setCost] = useState('');

    const onSubmit = (e)=>{

        e.preventDefault();
       
        const expense = {
            id: uuidv4(),
            name: name,
            cost: parseInt(cost)
        };

        dispatch ({
            type:'Add_Expense',
            payload: expense
        });

    };

    return (
        <form onSubmit={onSubmit}> 
            <div className="row">
                <div className="col-sm">

                    <label for="name">Name</label>
                    <input required="required" className="form-control" 
                           type="text" id="name" value={name} 
                           onChange={(e)=>setName(e.target.value)}></input>

                </div>
                
                <div className="col-sm">

                    <label for="cost">Cost: </label>
                    <span class="currency-code">$</span>
                    <input required="required" className="form-control" 
                           type="number" id="name" value={cost} 
                           onChange={(e)=>setCost(e.target.value)}></input>

                </div>
                <div className="col-sm mt-4">

                    <button type="submit" className="btn btn-primary" >Save</button>

                </div>
            </div>
        </form>
    );
};
export default AddExpense ;