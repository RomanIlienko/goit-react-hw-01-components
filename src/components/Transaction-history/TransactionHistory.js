import PropTypes from 'prop-types';
import styles from './Transactions.module.css'
import TransactionsTable from './TransactionsTable'

export default function TransactionHistory({ items }) {
    return (
        <table className={styles.transaction_history}>
            <thead>
                <tr>
                    <th className={styles.transaction_title}>Type</th>
                    <th className={styles.transaction_title}>Amount</th>
                    <th className={styles.transaction_title}>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(transaction => (
                    <TransactionsTable
                        key={transaction.id}
                        type={transaction.type}
                        amount={transaction.amount}
                        currency={transaction.currency}
                    />
                ))}
            </tbody>
        </table>
    );
};

TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
}