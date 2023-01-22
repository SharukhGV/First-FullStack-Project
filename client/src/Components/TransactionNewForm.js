// import { useState } from "react";

import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function TransactionNewForm() {
  const API = process.env.REACT_APP_API_URL;
  const [newTransaction, setnewTransaction] = useState({
    name: "",
    date: "",
    amount: 0,
    from: "",
    category: "",
  });
  // let index = useParams();
  const navigate = useNavigate();

  const handleTextChange = (event) => {
    setnewTransaction({
      ...newTransaction,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${API}/transactions`, newTransaction)
      .then(() => {
        navigate("/transactions");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // const addTransaction = (newTransaction) => {
  //     axios
  //     .post(`${API}/transactions`, newTransaction)
  //     .then(
  //     () => {
  //     navigate(`/transactions`);
  //     })
  //     .catch((er) => console.error("catch", er));
  //    };

  //    var today = moment().format('YYYY-MM-DD');
  //    $('#datePicker').val(today);

  return (
    <div className="edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Transaction"
          required
        />
        <label htmlFor="date">Date:</label>
        <input
          id="date"
          type="date"
          // pattern="http[s]*://.+"
          required
          // placeholder="http://"
          onChange={handleTextChange}
        />
        <label htmlFor="category">Category:</label>
        <input
          id="category"
          type="text"
          name="category"
          placeholder="income,expense...or anything else!"
          onChange={handleTextChange}
        />
        <label htmlFor="amount">Amount:</label>
        <input
          id="amount"
          type="number"
          name="amount"
          onChange={handleTextChange}
        />
        <label htmlFor="from">Origin/From:</label>
        <textarea
          id="from"
          name="from"
          onChange={handleTextChange}
          placeholder="The Origins of the income or expense..."
        />
        <br />

        <input type="submit" />
      </form>

      <span>
        <Link to={`/transactions`}>
          <button>Back</button>
        </Link>
      </span>
    </div>
  );
}
