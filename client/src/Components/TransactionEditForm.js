import { useParams, useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function TransactionEditForm() {
  let {index} = useParams();
  // console.log(index)

  //TRansactions is the previous data populated into the form
  const [transaction, setTransaction] = useState(
     {
    name: "",
  date: "",
  amount: 0,
  from: "",
  category: ""
});

  const navigate = useNavigate();

  //uses setEdit value of edit to 

  useEffect(() => {
  axios.get(`${API}/transactions/${index}`)
    .then((response) => {
      setTransaction(response.data);
    })
    .catch((e) => console.error(e));

  // useEffect(() => {
  //   axios
  //     .get(`${API}/transactions`)
  //     .then((response) => setTransaction((response.data)[Number(index)]))
  //     .catch((e) => console.error("catch", e));
  // }, [index]);

  // const transDATAinitial = {
  //   name: `${transaction.name}`,
  //   date: `${transaction.date}`,
  //   amount: `${transaction.amount}`,
  //   from: `${transaction.from}`,
  //   category: `${transaction.category}`
  // };
  }, [index]);

  // const [edit, newEdit]= useState([])

  // useEffect(()=>{
  //   newEdit(transaction)
  // },[transaction])

  const handleTextChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };

  const updateTransaction = () => {
    axios
      .put(`${API}/transactions/${index}`, transaction)
      .then((response) => {
        // setTransaction(response.data); NO NEED TO DO ANYTHING WITH THE DATE IN AN EDIT FORM, JUST HAVE TO NAVIGATE BACK TO TO WHAT YOU WERE EDITING
        navigate(`/transactions/${index}`);
      })
      .catch((e) => console.error("catch", e));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateTransaction();
  };

  return (
    <div className="edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={transaction.name}
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
          value={transaction.date}
          // placeholder="http://"
          onChange={handleTextChange}
        />
        <label htmlFor="category">Category:</label>
        <input
          id="category"
          type="text"
          name="category"
          value={transaction.category}
          placeholder="income,expense...or anything else!"
          onChange={handleTextChange}
        />
        <label htmlFor="amount">Amount:</label>
        <input
          id="amount"
          type="number"
          name="amount"
          onChange={handleTextChange}
          value={transaction.amount}
        />
        <label htmlFor="from">Origin/From:</label>
        <textarea
          id="from"
          name="from"
          value={transaction.from}
          onChange={handleTextChange}
          placeholder="The Origins of the income or expense..."
        />
        <br />

        <input type="submit" />
      </form>
      <Link to={`/transactions/${(index)}`}>
        <button>Nevermind!</button>
      </Link>
    </div>
  );
}

export default TransactionEditForm;

// return(
// <div>

// <form onSubmit={handleSubmit}>

// {/* DATE */}
// <label htmlFor="date">Date:</label><br></br>

// <input type="date" id="date" name="date" value={transaction.date} onChange={handleTextChange}></input><br></br>

// <label htmlFor="transName">Name of Transaction:</label><br></br>
// <input type="text" id="transName" name="transName" value={transaction.name} onChange={handleTextChange}></input><br></br>

// <label htmlFor="amount">Amount</label><br></br>
// <input type="number" id="amount" name="amount" value={transaction.amount} onChange={handleTextChange}></input><br></br>

// <label htmlFor="from">Transaction Origin:</label><br></br>
// <input type="text" id="from" name="from" value={transaction.from} onChange={handleTextChange}></input><br></br>

// <label htmlFor="category">Transaction Category:</label><br></br>
// <input type="text" id="category" name="category" value={transaction.category} onChange={handleTextChange}></input><br></br>

// <button type="submit">Submit</button><br></br>
// </form>
// <span>
//           <Link to={`/transactions`}>
//             <button>Nevermind!</button>
//           </Link>
//         </span>
//     </div>
// )

// }
