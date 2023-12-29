import { useContext } from "react";
import { FaRegMoon } from "react-icons/fa";
import BudgetContext from '../context/BudgetContext';
import { IoSunnyOutline } from "react-icons/io5";
export default function Header() {
    const { mode, dispatch } = useContext(BudgetContext);
    const style = {
        border: '2px solid black',
        borderRadius: '50px',
        padding: '5px',
        fontSize: '2.4rem',
        cursor: 'pointer'
    }
    const handleMode = () => {
        dispatch({
            type: 'Change_Mode',
            payload: mode === 'light' ? 'dark' : 'light'
        })
    }
    return (
        <div className="row d-flex">
            <div className="col"><h1>My Budget Planner</h1></div>
            <div className="col-sm-8">
                {mode==='light'?(<FaRegMoon style={style} onClick={handleMode} />):<IoSunnyOutline style={style} onClick={handleMode}/>}
            </div>
        </div>
    )
}
