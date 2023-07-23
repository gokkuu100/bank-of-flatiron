import React, { useState, useEffect } from "react";

const SearchList = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(true);


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
            <label>Search: </label>
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