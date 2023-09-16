#!usr/bin/node

const { dict } = require('./101-data');

const invertedDict = {};

for (const userId in dict) {
  const occurrences = dict[userId];
  if (invertedDict[occurrences]) {
    invertedDict[occurrences].push(userId);
  } else {
    invertedDict[occurrences] = [userId];
  }
}

console.log(invertedDict);
