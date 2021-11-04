import PropTypes from 'prop-types';
import styles from './Transactions.module.css'

function TransactionsTable({id, type, amount, currency }) {
    return (
        <tr key={id} className={styles.transaction_line}>
            <td className={styles.transaction_info}>{type}</td>
            <td className={styles.transaction_info}>{amount}</td>
            <td className={styles.transaction_info}>{currency}</td>
        </tr>
    );
};

export default TransactionsTable

TransactionsTable.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
}