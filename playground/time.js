const moment = require('moment');

var date = moment();

//console.log(date.format());    //2018-04-23T19:16:51+05:30

//formatting
console.log("---------format-------------");
console.log(date.format('MMM Do, YYYY'));
console.log(date.format('h:mm a'));

//manipulation
console.log("------------Manipulation----------");
console.log(date.format('Do MMM, YYYY'));
date.add(1,'month').add(5,'days')
console.log(date.format('Do MMM, YYYY'));

//Display time from...
console.log("------Time From...---------");
console.log(date.fromNow());
date.subtract(1,'month');
console.log(date.fromNow());
date.subtract(5,'days').add(10,'hours');
console.log(date.fromNow());
date.subtract(10,'hours').add(45,'minutes');
console.log(date.fromNow());
date.subtract(49,'minutes').add(29,'second');
console.log(date.fromNow());
