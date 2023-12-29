import { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import BudgetContext from "../context/BudgetContext";
export default function ExpenseItem(props) {
    const { item } = props;
    const context = useContext(BudgetContext);
    const { dispatch } = context;
    const DeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: item,
        })
    }
    const style = {
        fontSize:'1.4rem',
        cursor:'pointer'
    }
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            {item.name}
            <div className="d-flex align-items-center">
                <span className="badge bg-primary rounded-pill me-2">{item.cost} &#8377;</span>
                <TiDelete style={style} onClick={DeleteExpense} />
            </div>
        </li>
    )
}
