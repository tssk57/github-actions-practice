const fs = require('fs');
const path = require('path');

const currentDistDir = path.resolve(__dirname, '../current-dist/assets');
const sourceDistDir = path.resolve(__dirname, '../source-dist/assets');

const currentFiles = fs.readdirSync(currentDistDir);
const sourceFiles = fs.readdirSync(sourceDistDir);

const currentJsFiles = currentFiles.filter((file) => file.endsWith('.js'));
const sourceJsFiles = sourceFiles.filter((file) => file.endsWith('.js'));

const currentCssFiles = currentFiles.filter((file) => file.endsWith('.css'));
const sourceCssFiles = sourceFiles.filter((file) => file.endsWith('.css'));

console.log('currentJsFiles', currentJsFiles);
console.log('sourceJsFiles', sourceJsFiles);

const diffJsFiles = currentJsFiles.filter(
  (file) => !sourceJsFiles.includes(file)
);
const diffCssFiles = currentCssFiles.filter(
  (file) => !sourceCssFiles.includes(file)
);

if (diffJsFiles.length > 0) {
  console.error('JS files are different');
  console.error(diffJsFiles);
  process.exit(1);
}

if (diffCssFiles.length > 0) {
  console.error('CSS files are different');
  console.error(diffCssFiles);
  process.exit(1);
}

console.log('All files are same');
