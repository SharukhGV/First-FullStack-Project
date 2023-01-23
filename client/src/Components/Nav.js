import { useEffect,useMemo } from "react";
import { NavLink } from "react-router-dom";

function Nav({ transactions }) {
  let accumulatorArray = useMemo(() => [], []);
console.log(accumulatorArray[accumulatorArray.length - 1])

useEffect(()=>{

  transactions.reduce((accumulator, currentValue) => {
    accumulator = Number(accumulator) + Number(currentValue.amount);
    accumulatorArray.push(accumulator);
    return null;
  }, 0)},[accumulatorArray,transactions])

  return (
    <nav>
     
      <ul className="no-bullets">
        <NavLink
          className="links"
          to="/"
          exact="true"
          activestyle={{ color: "white" }}
        >
          Home
        </NavLink>
        <NavLink
          className="links"
          to="/transactions"
          exact="true"
          activestyle={{ color: "white" }}
        >
          All Transactions
        </NavLink>
        <NavLink
          className="links"
          to="/transactions/new"
          exact="true"
          activestyle={{ color: "white" }}
        >
          New Form
        </NavLink>
        {/* <span className="totalSUM"><TotalSum /></span> */}
        {/* <span>{TotalSum}</span> */}
        <strong>Total Balance</strong>:
        {
          <span
            style={
              accumulatorArray[accumulatorArray.length - 1] <= 0
                ? {
                    color:"red"
                  }
                : (accumulatorArray[accumulatorArray.length - 1] >= 1000
                ? {color:"rgb(161, 240, 161)"}
                : {color:"white"})
            }
          >
            {transactions.reduce((accumulator, currentValue) => {
              accumulator = Number(accumulator) + Number(currentValue.amount);
              accumulatorArray.push(accumulator);
              return accumulator;
            }, 0)}
          </span>
        }
      </ul>
    </nav>
  );
}

export default Nav;
