export default function Transaction({ type, amount, currency }) {
  return (
    <tr className={type}>
      <td className="type">{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
}
