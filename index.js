const _ = require('lodash');
const { accountBalanceHistory } = require('./const')
const diffCal = require('./diff_cal');


const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  //const msg = 'Hello Koodoo \n';
  res.end(msg);
});

server.listen(port, () => {
  //console.log(`Server running on http://localhost:${port}/`);
  //console.log("accountBalanceHistory : " + JSON.stringify(accountBalanceHistory));
  console.log(accountTypeChecker(accountBalanceHistory));
});

const accountTypeChecker = (accountBalanceHistory) => {
  /***
  Your goal is to write a function that determines from someone's ${accountBalanceHistory} 🧾 (see the array above for an example)
  whether this array is of type A (variable) or type B (fixed).

  Type 🅰 denotes a balance history where the balance amount decreases by varying amounts each month.

  Type 🅱 is one where the balance amount changes by the same amount each month.
  ***/

  // Write your logic here  - No pressure 😁 //

  let result = diffCal.isDecreasing(_.map(accountBalanceHistory, 'account.balance.amount'));

  return result ? "A" : "B";
};