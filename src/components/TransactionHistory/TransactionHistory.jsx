const TransactionHistory = ({items}) => {
    const listItems = items.map(item =>
        <tr id={item.id}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
        </tr>
    )   
    return(
        <table class="transaction-history">
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            <tbody>
                {listItems}
            </tbody>
        </table>
    );
}

export default TransactionHistory;

//date props:
// id — id unic al tranzacției
// type — tipul tranzacției
// amount - suma tranzacției
// currency - valuta tranzacției