import "./TransactionHistory.css";
import Transaction from "../Transaction/Transaction";

export default function TransactionHistory({ trans }) {
  return (
    <table className="trans">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {trans.map((record) => {
          return (
            <Transaction
              key={record.id}
              type={record.type}
              amount={record.amount}
              currency={record.currency}
            />
          );
        })}
      </tbody>
    </table>
  );
}
