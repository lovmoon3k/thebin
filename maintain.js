const puppeteer = require('puppeteer');
const fs = require('fs');
const cheerio = require('cheerio');
const { fetch, setRelays } = require('fetch-relay');

setRelays(['https://relay-1.vercel.app', 'https://relay-2.vercel.app', 'https://relay-3.vercel.app', 'https://relay-4.vercel.app', 'https://relay-5.vercel.app']);
(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const userAgent = 'Mozilla/5.0 (X11; Linux x86_64)' +
  'AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.39 Safari/537.36';
    await page.setUserAgent(userAgent);

    await page.goto('https://pastebin.com/archive');
    await page.waitForSelector("a");
    const data = await page.evaluate(async () => {
      return [...document.querySelectorAll("a")].map(e => e.href)
    }).catch(err => console.log(err));
    data.forEach(async (e) => {
        if(!e.startsWith("https://pastebin.com/"))return;
        if(e.startsWith("https://pastebin.com/archive"))return;
        const id = e.slice(("https://pastebin.com/").length);
        if(!id)return;
        if(fs.existSync(`./data/${id}.html`))return;
        const { data } = await fetch({ url: `https://pastebin.com/raw/${id}` });
        fs.writeFileSync(`./data/${id}.html`, `${data}`)
    })
   await browser.close();
})();
