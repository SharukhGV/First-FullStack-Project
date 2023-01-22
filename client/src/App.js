// import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
// import Transactions from "./Components/Transactions";

// import Home from "./Components/Home";
// import Movies from "./Components/Movies";
// import People from "./Components/People";
// import Locations from "./Components/Locations";
// import WildCard from "./Components/WildCard";
// import Nav from "./Components/Nav";

// import TransactionDetails from "./Components/TransactionDetails";
// import TransactionEditForm from "./Components/TransactionEditForm";
// import TransactionNewForm from "./Components/TransactionNewForm";
// import Transactions from "./Components/Transactions";

import Edit from "./Pages/Edit";
import FourOFour from "./Pages/FourOFour";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";
import "./App.css";

// import "./App.css"
function App() {

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/transactions" element={<Index />} />
        <Route path="/transactions/:index" element={<Show />} />
        <Route path="/transactions/:index/edit" element={<Edit />} />
        <Route path="/transactions/new" element={<New />} />
        <Route path="*" element={<FourOFour />} />
      </Routes>
    </Router>
  );
}

export default App;
