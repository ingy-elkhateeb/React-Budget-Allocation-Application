import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Remaining = () =>{

    const {expenses,budget} = useContext(AppContext);

    const totalExpenses = expenses.reduce((total,item)=>{

        return(total = total + item.cost);

    },0);

    if (totalExpenses>budget){
        alert("your expenses exceeded your current budget");
    }
    // const alerttype = totalExpenses > budget ? 'alert-danger' : 'alert-success';
    // return(
    //     <div className={'alert ' + alerttype}>
    //         <span>remaining: ${budget - totalExpenses}</span>

    //     </div>
    // );
else {
    return(
        <div className="alert alert-success">
            <span>remaining: ${budget - totalExpenses}</span>

        </div>
    );
}
};

export default Remaining;