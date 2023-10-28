import React from "react";
import { createContext, useReducer } from "react";
import { v4 as uuidv4 } from 'uuid';


const AppReducer = (state, action) => {

    switch (action.type){

        case 'Add_Expense':
            return {
                ...state,
                expenses: [...state.expenses, action.payload],
            };
        case 'Delete_Item':
            return {
                ...state,
                expenses: state.expenses.filter((expense) => expense.id !== action.payload)
            };

        case 'SET_BUDGET':
            return {
                ...state,
                budget: action.payload,
            };
    
        default:
            return state;
    }

};

const initialState = {

    budget:2000,
    expenses: [
        {id: uuidv4(), name:'groceries', cost:200},
        {id: uuidv4(), name:'pharmacy', cost: 100 },
        {id: uuidv4(), name:'vacation', cost: 100 },
    ],

};
export const AppContext = createContext();

export const AppProvider = (props) => {

    const [state,dispatch]= useReducer(AppReducer,initialState);
    return(

        <AppContext.Provider value={{

            budget: state.budget,
            expenses: state.expenses,
            dispatch,
        }}>
            {props.children}
        </AppContext.Provider>
    );

};