import React, { useState, useEffect } from "react";
import TransactionTable from "./Transationtable";

const SearchList = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:3001/transactions')
          .then((resp) => {
            if (!resp.ok) {
              throw new Error('Error fetching');
            }
            return resp.json();
          })
          .then((data) => {
            //console.log('Received data:', data);
            if (!data || !Array.isArray(data)) {
              throw new Error('Wrong format');
            }
            setTransactions(data); 
            setLoading(false); 
          })
          .catch((error) => {
            console.error('Error when fetching data:', error);
            setLoading(false); 
          });
      }, []);


    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
      };

    const filteredTransactions = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

    return (
        <>
          <h2>Search Transaction</h2>
          <form>
            <label><strong>Search: </strong></label>
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearch}
              placeholder="Search by description..."
            />
          </form>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <>
            <TransactionTable transactions={filteredTransactions} />
            </>
          )}
        </>
      );

}

export default SearchList;