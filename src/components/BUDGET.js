import React, {useState, useContext} from "react";
import { AppContext } from "../context/AppContext";
import ViewBudget from './ViewBudget';
import EditBudget from './EditBudget';
const BUDGET = ()=>{

    const { budget, dispatch } = useContext(AppContext);
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
		setIsEditing(true);
	};

    const handleSaveClick = (value) => {
       if(value>20000){
        alert("enter number below 20,000");
       }
       else if(value<0){
        alert("enter number above 0");
       }
       else{
		dispatch({
			type: 'SET_BUDGET',
			payload: value,
		});
    }
		setIsEditing(false);
	};
    return (
		<div class='alert alert-secondary p-3 d-flex align-items-center justify-content-between'>
			{isEditing ? (
				<EditBudget handleSaveClick={handleSaveClick} budget={budget} />
			) : (
				<ViewBudget handleEditClick={handleEditClick} budget={budget} />
			)}
		</div>
	);
};
export default BUDGET;