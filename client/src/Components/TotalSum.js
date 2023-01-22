import { useState, useEffect } from "react";
import axios from "axios";
//   let theColorCodedTotal = "";
// import { numberToColor } from 'number-to-color'

function TotalSum() {
    // let theStyleArray = [];
  // const startValue = useRef(0);
  const [transactions, settransactions] = useState([]);
//   let theStyle={color: `${theStyleArray[theStyleArray.length - 1]}`};

//   const [theStyle, settheStyle] = useState([{ color: "white" }]);
//   settheStyle(theStyleArray[theStyleArray.length - 1]);
  const API = process.env.REACT_APP_API_URL;
  //   const tenthColorOfSixteen = numberToColor(10, 16) // equals to { r: 0, g: 64, b: 255 }

  useEffect(() => {
    axios
      .get(`${API}/transactions`)
      .then((response) => settransactions(response.data))
      .catch((e) => console.error("catch", e));
  }, [API]);

  // useEffect(() => {
  //     for(let i=0;transactions.length>i;i++){
  //         startValue.current += Number(transactions.amount)
  //       }
  //   }, [transactions.amount, transactions.length]);

  // useEffect(()=>{
  //     const colorGreen = {
  //         color: "green",
  //       };
  //       const colorRed = {
  //         color: "red",
  //       };

  //     if (
  //         transactions.reduce(
  //           (accumulator, currentValue) =>
  //             (accumulator = Number(accumulator) + Number(currentValue.amount)),
  //           0
  //         ) > 1000
  //       ) {
  //         theColorCodedTotal = `<span style=${colorGreen}>${transactions.reduce(
  //           (accumulator, currentValue) =>
  //             (accumulator = Number(accumulator) + Number(currentValue.amount)),
  //           0
  //         )}</span>`;
  //       }
  //       if (
  //         transactions.reduce(
  //           (accumulator, currentValue) =>
  //             (accumulator = Number(accumulator) + Number(currentValue.amount)),
  //           0
  //         ) < 0
  //       )  {
  //         theColorCodedTotal = `<span style=${colorRed}>${transactions.reduce(
  //           (accumulator, currentValue) =>
  //             (accumulator = Number(accumulator) + Number(currentValue.amount)),
  //         )}</span>`;
  //       }
  // },[transactions])

  return (
    <span className="colorCodeVALUETOTAL">
      Total Balance:
      <span>
        {transactions.reduce((accumulator, currentValue) => {

          accumulator = Number(accumulator) + Number(currentValue.amount);
        //   let theStyle=({ color: "white" });


        //   if (Number(accumulator) >= 1000) {
        //     theStyle=({ color: "green" });
        //   }
        //   if (Number(accumulator) < 0) {
        //     theStyle=({ color: "red" });
        //   }
        //   if (Number(accumulator) > 0 && Number(accumulator) < 1000) {
        //     theStyle=({ color: "white" });
        //   }

          // {/* <span style={theStyle}>{accumulator}</span>; */}
          return (accumulator)
        //   <div style={theStyle}>{accumulator}</div>
        //   )
        }, 0)}
      </span></span>
  );
}

export default TotalSum;
