#!usr/bin/node

const fs = require('fs');
const sourceFile1 = process.argv[2];
const sourceFile2 = process.argv[3];
const destinationFile = process.argv[4];

if (!sourceFile1 || !sourceFile2 || !destinationFile) {
  console.error('Usage: node 102-concat.js <sourceFile1> <sourceFile2> <destinationFile>');
  process.exit(1);
}

try {
  const content1 = fs.readFileSync(sourceFile1, 'utf8');
  const content2 = fs.readFileSync(sourceFile2, 'utf8');
  const concatenatedContent = content1 + '\n' + content2;

  fs.writeFileSync(destinationFile, concatenatedContent, 'utf8');
  console.log(`Files ${sourceFile1} and ${sourceFile2} concatenated and saved to ${destinationFile}`);
} catch (err) {
  console.error(`Error: ${err.message}`);
  process.exit(1);
}
