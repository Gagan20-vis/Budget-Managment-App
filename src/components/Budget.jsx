import React, { useContext, useState } from 'react'
import BudgetContext from '../context/BudgetContext'
import EditTotalBudget from './EditTotalBudget';
import ViewTotalBudget from './ViewTotalBudget'
export default function Budget() {
    const context = useContext(BudgetContext);
    const { TotalBudget,SpendBudget,mode,dispatch } = context;
    const [isEdit, setIsEdit] = useState(false);
    const handleSaveClick = value => {
        dispatch({
            type: 'SET_BUDGET',
            payload: value,
        })
        setIsEdit(false);
    }
    const color =  mode==='dark' ? 'black' : 'black';
    const handleEditClick = () => setIsEdit(true);
    return (
        <>
            <div className="container px-4 text-center "style={{color: color}}>
                <div className="row gx-5">
                    <div className="col mx-5 my-2" style={{ backgroundColor: 'var(--bs-secondary-bg)',border:'5px solid var(--bs-dark-border-subtle)', borderRadius:'50px' }}>
                        {isEdit ? (<EditTotalBudget handleSaveClick={handleSaveClick} />) : (<ViewTotalBudget handleEditClick={handleEditClick} TotalBudget={TotalBudget} />)}
                    </div>
                    <div className="col mx-5 my-2 d-flex flex-column justify-content-center" style={{ backgroundColor: 'var(--bs-success-bg-subtle)',border:'5px solid var(--bs-success-border-subtle)', borderRadius:'50px' }}>
                        <div className="py-3">Remaining: <span style={{fontWeight:"bold"}}>{TotalBudget - SpendBudget} &#8377;</span></div>
                    </div>
                    <div className="col mx-5 my-2 d-flex flex-column justify-content-center" style={{ backgroundColor: 'var(--bs-primary-bg-subtle)', border:'5px solid var(--bs-primary-border-subtle)',borderRadius:'50px' }}>
                        <div className="py-3">Spent so far: <span style={{fontWeight:"bold"}}>{SpendBudget} &#8377;</span></div>
                    </div>
                </div>
            </div>
        </>
    )
}
