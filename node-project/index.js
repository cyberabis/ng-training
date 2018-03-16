let moment = require('moment');

let d = new Date();
console.log('Date: ', d);
console.log('Formatted date: ', moment(d).fromNow());