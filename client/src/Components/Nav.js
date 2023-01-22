import { NavLink } from "react-router-dom";
import TotalSum from "./TotalSum";
// import { useNavigate } from "react-router-dom";
// import "./budget-LOGO.png"
// import { useEffect } from "react";
function Nav() {
  // const navigate= useNavigate()
  // useEffect(() => {

  //   const allWithClass = Array.from(
  //     document.getElementsByClassName('colorCodeVALUETOTAL')
  //   );
  //   console.log(allWithClass);
  // }, []);


          // if (Number(sumTOT) >= 1000) {
          //   theStyle=({ color: "green" });
          // }
          // if (Number(sumTOT) < 0) {
          //   theStyle=({ color: "red" });
          // }
          // if (Number(sumTOT) > 0 && Number(accumulator) < 1000) {
          //   theStyle=({ color: "white" });
          // }





  return (
    <nav>
      {/* <img onClick={() => {
        navigate('/');
      }} src={(require("./budget-LOGO.png"))} className="tot-LOGO" alt="totoro-logo"/> */}
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

{/* <li><TotalSum/></li> */}
        {/* <NavLink
          className="links"
          to="/transactions/:id"

          style={({ isActive }) => ({
            color: isActive ? "limegreen" : "black",
          })}
        >Transaction</NavLink> */}
<span className="totalSUM"><TotalSum /></span>

      </ul>
    </nav>
  );
}

export default Nav;
