export default function ViewTotalBudget(props) {
    const {handleEditClick,TotalBudget} = props
    return (
        <div className="py-3 d-flex justify-content-between align-items-center">
            <span>Budget: <span style={{fontWeight:"bold"}}>{TotalBudget}  &#8377;</span> </span>
            <button className='btn btn-primary px-3' style={{borderRadius:'50px'}} onClick={handleEditClick}>Edit</button>
        </div>
    )
}
