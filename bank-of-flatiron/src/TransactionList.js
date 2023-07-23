import React, {useEffect, useState} from "react";

const TransactionList = () => {
    const [transactions, setTransactions] = useState([])

    useEffect(() => {
        
    })

    return (
        <>
        <h3>Transaction table</h3>
        <table>
            <tr>
                <th>ID</th>
                <th>Date</th>
                <th>Description</th>
                <th>Category</th>
                <th>Amount</th>
            </tr>
            <tr>
                {transactions.map(transaction => (
                    <tr key={transaction.id}>
                        <td>{transaction.id}</td>
                        <td>{transaction.date}</td>
                        <td>{transaction.description}</td>
                        <td>{transaction.category}</td>
                        <td>{transaction.amount}</td>
                    </tr>
                ))}
            </tr>
        </table>
        </>
    )

}
export default TransactionList