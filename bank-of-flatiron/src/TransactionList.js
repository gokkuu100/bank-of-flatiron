import React, { useEffect, useState } from 'react';
//import TransactionForm from './TransactionForm';

const TransactionList = () => {
  const [transactions, setTransactions] = useState({}); // Change initial state to an object

  useEffect(() => {
    fetch('http://localhost:3001/transactions')
      .then((resp) => {
        if (!resp.ok) {
          throw new Error('Error fetching data');
        }
        return resp.json();
      })
      .then((data) => {
        //console.log('Received data:', data);
        if (!data || typeof data !== 'object' || Object.keys(data).length === 0) {
          throw new Error('Wrong format');
        }
        setTransactions(data); // Save the fetched data as an object
      })
      .catch((error) => {
        console.error('Error when fetching data:', error);
      });
  }, []);

//   const addTransaction = (newTransaction) => {
//     // Generate a new unique ID (you can use a library like 'uuid' for this purpose)
//     const newId = Object.keys(transactions).length + 1;

//     // Create the new transaction object with the new ID
//     const transactionToAdd = { ...newTransaction, id: newId };

//     // Update the transactions state with the new transaction added
//     setTransactions((prevTransactions) => ({
//       ...prevTransactions,
//       [newId]: transactionToAdd,
//     }));
//   };

  if (!transactions || typeof transactions !== 'object' || Object.keys(transactions).length === 0) {
    return null;
  }

  return (
    <>
      
      <h3>Transaction table</h3>
      <table>
        <thead>
            <tr>
            <th>ID</th>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(transactions).map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.id}</td>
              <td>{transaction.date}</td>
              <td>{transaction.description}</td>
              <td>{transaction.category}</td>
              <td>{transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TransactionList;
