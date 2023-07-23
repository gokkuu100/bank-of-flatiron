import React, { useEffect, useState } from 'react';
import TransactionTable from './Transationtable';

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
        setTransactions(data); 
      })
      .catch((error) => {
        console.error('Error when fetching data:', error);
      });
  }, []);

  if (!transactions || typeof transactions !== 'object' || Object.keys(transactions).length === 0) {
    return null;
  }

  return (
    <>
      
      <h2>Transaction table</h2>
      <TransactionTable transactions={transactions}/>
    </>
  );
};

export default TransactionList;
