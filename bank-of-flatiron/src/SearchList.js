import React, { useState, useEffect } from "react";

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
              <p>Transactions done:</p>
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
                  {filteredTransactions.map((transaction) => (
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
          )}
        </>
      );

}

export default SearchList;