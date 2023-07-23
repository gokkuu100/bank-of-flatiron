import React, { useState } from "react";

const TransactionForm = () => {
  const [formData, setFormData] = useState({
    date: "",
    description: "",
    category: "",
    amount: "",
  });
