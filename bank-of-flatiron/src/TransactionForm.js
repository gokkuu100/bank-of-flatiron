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
    
    // Create a newTransaction object with the form data
    const newTransaction = {
      date: formData.date,
      description: formData.description,
      category: formData.category,
      amount: parseFloat(formData.amount), // Parse amount to a float
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
        // If needed, handle the response data from the server
        console.log("Transaction added:", data);
      })
      .catch((error) => {
        console.error("Error", error);
      });

    // Clear the form data after submitting
    setFormData({
      date: "",
      description: "",
      category: "",
      amount: "",
    });
  };
  
