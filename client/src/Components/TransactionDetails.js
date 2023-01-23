import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
function TransactionDetails() {
  const API = process.env.REACT_APP_API_URL;
  const [transaction, setTransaction] = useState([]);
  let { index } = useParams();
  const navigate = useNavigate();

  // useEffect(() => {}, []);
  // const API = process.env.REACT_APP_API_URL;

  ///promise
  useEffect(() => {
    axios
      .get(`${API}/transactions/${index}`)
      .then((response) => {
        setTransaction(response.data);
      })
      .catch((err) => {
        // navigate("/not-found");
        console.log(err);
      });
  }, [API,index]);

  // const handleDelete = () => {};
  const handleDelete = () => {
    axios
      .delete(`${API}/transactions/${index}`)
      .then(() => {
        navigate(`/transactions`);
      })
      .catch((e) => console.error(e));
  };
  return (
    <article>
      <fieldset>
        <legend> Transaction #{index}</legend>
        <h3>
          <strong>Name:</strong> {transaction.name}
        </h3>
        <h3>
          <strong>Date:</strong> {transaction.date}
        </h3>
        <h3>
          <strong>Origin:</strong> {transaction.from}
        </h3>
        <h3>
          <strong>Category:</strong> {transaction.category}
        </h3>
        <h3>
          <strong>Amount:</strong> {transaction.amount}
        </h3>
      </fieldset>

      <div className="showNavigation">
        <span>
          <Link to={`/transactions`}>
            <button>Back</button>
          </Link>
        </span>
        <span>
          <Link to={`/transactions/${index}/edit`}>
            <button>Edit</button>
          </Link>
        </span>
        <span>
          <button onClick={handleDelete}>Delete</button>
        </span>
      </div>
    </article>
  );
}

export default TransactionDetails;

// OLD CODE

// import axios from "axios";
// // import { useState, useEffect } from "react";
// import {  useParams, useNavigate } from "react-router-dom";
// // import SpecificTransaction from "./SpecificTransaction";
// // import { useState, useEffect } from "react";

// function TransactionDetails({individualTransactions, index}){

//     const API = process.env.REACT_APP_API_URL;
//     let navigate = useNavigate();
//       // index = useParams();

//     // const [transaction, setTransaction] = useState([]);

//     // useEffect(() => {
//     //     axios
//     //       .get(`${API}/transactions`)
//     //       .then((response) => setTransaction(response.data))
//     //       .catch((e) => console.error("catch", e));
//     //   }, [API]);

//       // useEffect(() => {
//       //   axios
//       //     .get(`${API}/transactions/${index}`)
//       //     .then((response) => {
//       //       setTransaction(response.data);
//       //     })
//       //     .catch(() => {
//       //       navigate("/not-found");
//       //     });
//       // }, [index, navigate]);

// // console.log(API)

// const handleDelete = () => {
//     axios
//       .delete(`${API}/transactions/${index}`)
//       .then(() => {
//         navigate(`/transactions`);
//       })
//       .catch((e) => console.error(e));
//   };

// return(
//     <div key={individualTransactions}>
// <fieldset>
// <legend>Transaction Number: {index}</legend>

// <h3>Name: {individualTransactions.name}</h3>
// <h3>Date: {individualTransactions.date}</h3>
// <h3>Amount: {individualTransactions.amount}</h3>
// <h3>Origin of Transaction: {individualTransactions.from}</h3>
// <h3>Category of Transaction: {individualTransactions.category}</h3>
// </fieldset>
// <button onClick={(index) => {
//         navigate(`${API}/transactions/${index}`)}}>Navigate to individual Transaction</button>
// <button onSubmit={handleDelete}>Delete</button>

//     </div>
// )

// }

// export default TransactionDetails
