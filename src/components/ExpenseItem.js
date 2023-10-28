import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useContext } from "react";

import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
const ExpenseItem = (props) => {

    const {dispatch} = useContext(AppContext);

    const DeleteItem = ()=>{

        dispatch({
            type: 'Delete_Item',
            payload: props.id
        });
    };
    return(
        
        <li className=" list-group-item d-flex justify-content-between align-items-center ">
            
            {props.name}
           
            <div> 
                <span className='left-span-wrapper' > 
                <div className="cost-wrapper">
               $ {props.cost} </div>
               <TiDelete size='1.5em' onClick={DeleteItem}></TiDelete>
               
               </span>
               

                
               
            </div>
            

        </li>
        

    );
};
export default ExpenseItem;