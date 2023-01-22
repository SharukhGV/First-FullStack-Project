const express = require("express");
// const app = express()
const transactions = express.Router();
const transactionsArray = require("../models/transactions");
// const { validateURL } = require("../models/validations.js");

//Middleware
// function checkExists(req,res,next){
//   const { index } = req.params;
//   if(transactionsArray[index]){
//     next()
//   }
//   else{
//     // res.status(302).redirect("/transactions")
//     res.status(404).json({error: "Element at given index not found."})
//   }
// }


transactions.get("/", (req, res) => {
  res.json(transactionsArray);
});


// app.get("/transactions/awesome", (req, res) => {
//     res.send(`
//    <h1>rocks are awesome!</h1>
//    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Pyrite_-_Huanzala_mine%2C_Huallanca%2C_Bolognesi%2C_Ancash%2C_Peru.jpg/260px-Pyrite_-_Huanzala_mine%2C_Huallanca%2C_Bolognesi%2C_Ancash%2C_Peru.jpg" >
//    `);
//   });
  
// transactions.get("/transactions/:index", (req, res) => {
//     const { index } = req.params;
//     if (transactions[index]) {
//       res.send(transactions[index]);
//     } else {
//       res.send("cannot find anything at this index: " + index);
//     }
//   });

  // CREATE
transactions.post("/", (req, res) => {
    transactionsArray.push(req.body);
    res.json(transactionsArray[transactionsArray.length - 1]);
  });

//   transactions.post("/transactions", function(req,res){
//     console.log(req.body)
//     //num1 i the name of the form element in React
//     //num2 i the name of the form element in React

//     var num1 = Number(req.body.num1)
//     var num2 = Number(req.body.num2)
//     var result = num1 +num2
//         res.send(`The result of the calculation is ${result}`)
//     })

// SHOW
transactions.get("/:index", (req, res) => {
const {index } = req.params

const element = transactionsArray[index];
// if (transactionsArray[req.params.index]) {

    if (element) {
      // res.json(transactionsArray[req.params.index]);
      res.json(transactionsArray[index]);

    } else {
      res.status(404).json({ error: "Not Found" });
    }
  });

// DELETE
transactions.delete("/:index", (req, res) => {
    if (transactionsArray[req.params.index]) {
      const deletedBookMark = transactionsArray.splice(req.params.index, 1);
      res.status(200).json(deletedBookMark);
    } else {
      res.status(404).json({ error: "Not Found" });
    }
  });
    
// UPDATE
transactions.put("/:index", async (req, res) => {
  
    if (transactionsArray[req.params.index]) {
      transactionsArray[req.params.index] = req.body;
      res.status(200).json(transactionsArray[req.params.index]);
    } else {
      res.status(404).json({ error: "Not Found" });
    }
  });

//   if (element) {
//     transactionsArray[index] = req.body;
//      res.status(200).json(transactionsArray[index]);
//    } else {
//      res.status(404).json({ error: "Not Found" });
//    }
//  });

// 404 PAGE
transactions.get("*", (req, res) => {
    res.status(404).json({ error: "Page not found" });
  });



// transactions.use(bodyParser.urlencoded({extended:true}))

// // transactions.get("/", function(req, res){
// //     //For single liners
// //     // res.send("Hello World")

// //     //for sending entire files
// //     // res.sendFile(__dirname + "../../client/budget-app/Components/Home.js")



// // });

// transactionsRouter.get("/", function(req,res){
//     res.json(jsonDataTransactionsArray)
// })


// transactions.post("/", function(req,res){
// console.log(req.body)
// var num1 = Number(req.body.num1)
// var num2 = Number(req.body.num2)
// var result = num1 +num2
//     res.send(`The result of the calculation is ${result}`)
// })





// // app.get("/transactions/:index", (req, res) => {
// //     const { index } = req.params;
// //     if (jsonData[index]) {
// //       res.send(jsonData[index]);
// //     } else {
// //       res.send("cannot find any transactions at this index: " + index);
// //     }
// //   });


// // 404 PAGE
// // app.get("*", (req, res) => {
// //     res.status(404).json({ error: "Page not found" });
// //   });


// app.listen(3000, function(){
//     console.log("server is running")
// });



//  // // EXPORT
// module.exports = app;

module.exports = transactions;
