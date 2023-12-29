import { useContext, useState } from 'react';
import BudgetContext from '../context/BudgetContext';
import Swal from 'sweetalert2'
import { v4 as uuid4 } from 'uuid';
export default function AddExpense() {
    const context = useContext(BudgetContext);
    const { TotalBudget,SpendBudget,mode,dispatch } = context;
    const [Expense, setExpense] = useState({ name: '', cost: '' });
    const [name,setName] = useState('');
    const [cost,setCost] = useState('');
    const onSave = (event) => {
        event.preventDefault();
        if (TotalBudget === 0) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please Make a Budget First !",
            });
            return;
        }
        if (Expense.cost > (TotalBudget - SpendBudget)) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "You have not that much Budget",
            });
            return;
        }
        const expense = {
            id: uuid4(),
            name,
            cost: parseInt(cost)
        }
        dispatch({
            type:'ADD_EXPENSE',
            payload: expense
        })
        setName('');
        setCost('');
        
    }   
    document.body.style.background = mode==='dark' ? '#2D4356' : 'white';
    document.body.style.color = mode==='dark' ? 'white' : 'black';
    document.body.style.transition = 'background-color .4s ease-out 0s'
    return (
        <div className='container mt-4'>
            <h3>Add Expense</h3>
            <form onSubmit={onSave}>
                <div className='row'>
                    <div className="col-sm-3 mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" name='name' value={name} onChange={(e) => setName(e.target.value)} style={{borderRadius:'50px',border:'5px solid var(	--bs-danger-border-subtle)'}}/>
                    </div>
                    <div className="col-sm-3 mb-3">
                        <label className="form-label">Cost</label>
                        <input type="text" className="form-control" id="name" name='cost' value={cost} onChange={(e) => setCost(e.target.value)} style={{borderRadius:'50px',border:'5px solid var(	--bs-danger-border-subtle)'}}/>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary px-4" style={{borderRadius:'50px'}}>Save</button>
            </form>
        </div>
    )
}
