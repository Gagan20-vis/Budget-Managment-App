import BudgetState from './context/BudgetState'
import Budget from './components/Budget'
import ShowExpense from './components/ShowExpense'
import AddExpense from './components/AddExpense'
import Header from './components/Header'
function App() {
  
  return (
    <div className='container my-4'>
      <BudgetState>
        <Header/>
        <Budget />
        <ShowExpense />
        <AddExpense />
      </BudgetState>
    </div>
  )
}

export default App
