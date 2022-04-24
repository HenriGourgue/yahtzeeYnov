'use strict';
const {roll} = require('./roll');
const {getScore} = require('./score');

console.log(getScore(roll()));
