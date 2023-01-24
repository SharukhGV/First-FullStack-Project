import axios from "axios";
import { useState, useEffect,useMemo } from "react";
import Transaction from "./Transaction";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

function Transactions() {
  const [transactions, settransactions] = useState([]);
  const API = process.env.REACT_APP_API_URL;
  let accumulatorArray = useMemo(() => [], []);

  useEffect(() => {
    axios
      .get(`${API}/transactions`)
      .then((response) => settransactions(response.data))
      .catch((e) => console.error("catch", e));
  }, [API]);

  return (
    <section>
<strong>Total Balance</strong>:
        {
          <span
            style={
              accumulatorArray[accumulatorArray.length - 1] <= 0
                ? {
                    color:"red"
                  }
                : (accumulatorArray[accumulatorArray.length - 1] >= 1000
                ? {color:"green"}
                : {color:"black"})
            }
          >
            {transactions.reduce((accumulator, currentValue) => {
              accumulator = Number(accumulator) + Number(currentValue.amount);
              accumulatorArray.push(accumulator);
              return accumulator;
            }, 0)}
          </span>
        }

      <table id="customers">
        <tbody>
          {transactions.map((individualTransactions, index) => {
            // const keyValueforTransaction = (Number({individualTransactions.date*index}))

            return (
              <Transaction
                key={uuidv4()}
                index={index}
                individualTransactions={individualTransactions}
              />
            );
          })}
        </tbody>
      </table>
     {/* {transactions.reduce((accumulator,currentValue) =>  accumulator = Number(accumulator) + Number(currentValue.amount) , 0 )
} */}
    </section>
  );
}

export default Transactions;
