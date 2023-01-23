// import { useState, useEffect } from "react";
// import axios from "axios";


function TotalSum({transactions}) {
  
//   const [transactions, settransactions] = useState([]);
//  
//   const API = process.env.REACT_APP_API_URL;

//   useEffect(() => {
//     axios
//       .get(`${API}/transactions`)
//       .then((response) => settransactions(response.data))
//       .catch((e) => console.error("catch", e));
//   }, [API]);

  return (
    <span className="colorCodeVALUETOTAL">
      Total Balance:
      <span>
        {transactions.reduce((accumulator, currentValue) => {

          accumulator = Number(accumulator) + Number(currentValue.amount);
       
          return (accumulator)
     
        }, 0)}
      </span></span>
  );
}

export default TotalSum;
