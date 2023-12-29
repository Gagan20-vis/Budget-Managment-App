import {useState} from 'react'
export default function EditTotalBudget(props) {
    const {handleSaveClick} = props;
    const [EditableBudget, setEditableBudget] = useState('');
    return (
        <div className="py-3 d-flex justify-content-between align-items-center">
            <input
                required='required'
                type='number'
                className='form-control mx-3'
                id='name'
                value={EditableBudget}
                placeholder='Enter Budget...'
                onChange={(event) => setEditableBudget(event.target.value)}
                style={{borderRadius:'50px'}}
            />
            <button className='btn btn-primary px-3' style={{borderRadius:'50px'}} onClick={() => handleSaveClick(parseInt(EditableBudget))}>Save</button>
        </div>
    )
}
