const fs = require('fs');
const fLine = require('firstline');
const total = fs.readdirSync('./data').filter(file => file.endsWith('.txt'));
if(!fs.existsSync(`./data/indexFile.text`)) fs.writeFileSync("./data/indexFile.text", "[]//index-files");
total.forEach((e) => {
  var index = fs.readFileSync('./data/indexFile.text', 'utf-8');
  var exist = fLine('./data/indexFile.text', "//index-files");
  const array = JSON.parse(exist.slice(0, -13));
  if(array.includes(e))return;
  const data = fs.readFileSync(`./data/${e}`, 'utf-8');
  array.push(e);
  index = `${index}\n\n${data}`;
  index = index.split(exist).join(`${JSON.stringify(array)}//index-files`);
  fs.writeFileSync("./data/indexFile.text", index);
})
