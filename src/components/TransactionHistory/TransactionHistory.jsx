import css from "../TransactionHistory/TransactionHistory.module.css"
export default function TransactionHistory({ transactions }) {
    const classTitelText = [css.text, css.tableTitleText];
    const classTr = [css.buttomBorder, css.tr];
    const classTD = [css.text, css.td];
    return (
      <table className={css.table}>
        <thead className={css.buttomBorder}>
          <tr className={css.tableTitle}>
            <th className={classTitelText.join(" ")}>Type</th>
            <th className={classTitelText.join(" ")}>Amount</th>
            <th className={classTitelText.join(" ")}>Currency</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr className={classTr.join(" ")} key={transaction.id}>
              <td className={classTD.join(" ")}>{transaction.type}</td>
              <td className={classTD.join(" ")}>{transaction.amount}</td>
              <td className={classTD.join(" ")}>{transaction.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
}