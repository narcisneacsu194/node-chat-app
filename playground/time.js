// var moment = require('moment');
//
// var date = moment();
// date.add(100, 'years').subtract(9, 'months');
// console.log(date.format('MMM Do YYYY HH:mm:ss a'));

var moment = require('moment');
var createdAt = 1234;
var date = moment(createdAt);

console.log(date.format('h:mm a'));
