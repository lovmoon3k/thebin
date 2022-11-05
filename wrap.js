const fs = require('fs');
const fLine = require('firstline');
const total = fs.readdirSync('./data').filter(file => file.endsWith('.txt'));
if(!fs.existsSync(`./data/indexFile.text`)) fs.writeFileSync("./data/indexFile.text", "[]//index-files");
var index = fs.readFileSync('./data/indexFile.text', 'utf-8');

(async () => {
var exist = await fLine('./data/indexFile.text', "//index-files");
const array = JSON.parse(exist.slice(0, -13));
total.forEach(async (e) => {
  if(array.includes(e))return;
  const data = fs.readFileSync(`./data/${e}`, 'utf-8');
  index = `${index}\n\n${data}`;
  array.push(e);
})
index = index.replace(exist, `${JSON.stringify(array)}//index-files`);
fs.writeFileSync("./indexFile.txt", index);
})();
