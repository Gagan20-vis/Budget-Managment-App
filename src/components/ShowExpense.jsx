import { useContext, useEffect, useState } from "react";
import BudgetContext from '../context/BudgetContext'
import ExpenseItem from "./ExpenseItem";

export default function ShowExpense() {
    const context = useContext(BudgetContext);
    const { Expenses } = context;
    const [filteredExpenses, setFilteredExpenses] = useState(Expenses || []);

    useEffect(() => {
        setFilteredExpenses(Expenses);
    }, [Expenses])

    const handleChange = e => {
        const searchQuery = e.target.value.toLowerCase();
        if (!searchQuery) {
            setFilteredExpenses(Expenses);
        } else {
            const searchExpense = Expenses.filter(item => item.name.toLowerCase().includes(searchQuery));
            setFilteredExpenses(searchExpense);
        }
    }

    return (
        <div className='container mt-3'>
            <h3>Expenses</h3>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Type to search..." onChange={handleChange} style={{borderRadius:'50px',border:'4px solid var(--bs-dark-border-subtle)'}}/>
            </div>
            <ul className="list-group p-3" style={{ minHeight: "10rem", border: "1px solid grey" }}>
                {filteredExpenses.map((item, ind) => (
                    <ExpenseItem item={item} key={ind} />
                ))}
            </ul>
        </div>
    )
}
