import { Link } from "react-router-dom";
// import 'react-native-get-random-values';
// import { v4 as uuidv4 } from 'uuid';

function Transaction({ individualTransactions, index }) {
  // const { v4: uuidv4 } = require('uuid');

  return (
    <tr><td>{individualTransactions.date}</td>
    <td><Link to={`/transactions/${index}`}>{individualTransactions.name}</Link></td>
    <td>{individualTransactions.amount}</td></tr>


  );
}

export default Transaction;
