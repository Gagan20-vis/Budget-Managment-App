import React, { useReducer } from 'react'
import BudgetContext from './BudgetContext'
import { v4 as uuidv4 } from 'uuid';
export const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE': {
            return {
                ...state,
                Expenses: [...state.Expenses, action.payload],
                SpendBudget: state.SpendBudget + action.payload.cost
            };
        }
        case 'DELETE_EXPENSE': {
            return {
                ...state,
                Expenses: state.Expenses.filter(
                    (expense) => expense.id !== action.payload.id
                ),
                SpendBudget: state.SpendBudget - action.payload.cost
            };
        }
        case 'SET_BUDGET':
            return {
                ...state,
                TotalBudget: action.payload,
            };
        case 'Change_Mode':
            return {
                ...state,
                mode: action.payload
            }
        default:
            return state;
    }
}
const initialState = {
    TotalBudget: 2000,
    SpendBudget: 960,
    mode: 'light',
    Expenses: [
        { id: uuidv4(), name: 'Shopping', cost: 50 },
        { id: uuidv4(), name: 'Holiday', cost: 300 },
        { id: uuidv4(), name: 'Transportation', cost: 70 },
        { id: uuidv4(), name: 'Fuel', cost: 40 },
        { id: uuidv4(), name: 'Child Care', cost: 500 },
    ],
};

const BudgetState = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <BudgetContext.Provider value={{
            TotalBudget: state.TotalBudget,
            SpendBudget: state.SpendBudget,
            mode: state.mode,
            Expenses: state.Expenses,
            dispatch,
        }}>
            {props.children}
        </BudgetContext.Provider>
    )
}

export default BudgetState
