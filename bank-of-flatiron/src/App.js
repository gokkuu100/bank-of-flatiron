import React, {useState} from 'react';
import './App.css';
import TransactionList from './TransactionList';
import TransactionForm from './TransactionForm';
import SearchList from './SearchList';

function App() {

  const [transactions, setTransactions] = useState([]);

  const addTransaction = (formData) => {
    setTransactions((prevTransactions) => [...prevTransactions, formData]);
  };
  
  return (
  <>
  <h1>Bank of FlatIron</h1>
  <TransactionList transactions={transactions} />
  <SearchList transactions={transactions} />
  <TransactionForm addTransaction={addTransaction}/>
  
  </>
  )
}



export default App;
