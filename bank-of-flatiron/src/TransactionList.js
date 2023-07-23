import React, {useState} from "react";

const TransactionList = () => {
    const [transactions, setTransactions] = useState([])

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
                
            </tr>
        </table>
        </>
    )

}
export default TransactionList