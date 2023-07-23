import React, { useState } from "react";

const TransactionForm = () => {
  const [formData, setFormData] = useState({
    date: "",
    description: "",
    category: "",
    amount: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Creates a new object with the form data
    const newTransaction = {
      date: formData.date,
      description: formData.description,
      category: formData.category,
      amount: parseFloat(formData.amount), // Parses to float
    };
    
    // Send the POST request to the server
    fetch("http://localhost:3001/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTransaction),
    })
      .then((resp) => {
        if (!resp.ok) {
          throw new Error("Error adding transaction");
        }
        return resp.json();
      })
      .then((data) => {
        alert("Transaction added")
        console.log("Transaction added:", data);
      })
      .catch((error) => {
        console.error("Error", error);
      });

    // Clears the form data after submitting
    setFormData({
      date: "",
      description: "",
      category: "",
      amount: "",
    });
  };

  return (
    <>
      <h2>Add New Transaction</h2>
      <form onSubmit={handleSubmit}>
        <div className="form">
          <label>Date: </label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form">
          <label>Description: </label>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form">
          <label>Category: </label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form">
          <label>Amount: </label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <button type="submit">Add Transaction</button>
        </div>
      </form>
    </>
  );
};

export default TransactionForm;
