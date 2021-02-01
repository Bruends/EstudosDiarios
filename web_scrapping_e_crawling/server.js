const express = require('express')
const puppeteer = require('puppeteer')

const server = express();

server.get('/', async (request, response) => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('https://www.alura.com.br/formacao-front-end');
  //await page.screenshot({ path: 'example.png' });

  const pageContent = await page.evaluate(() => {
    return {
      subititle: document.querySelector('.formacao-headline-subtitulo').innerHTML,
    }
  })

  console.log('pageContent: ', pageContent);

  await browser.close()
  response.send({
    // "id": 113709,
    // "code": "front-end",
    // "kind": "DEGREE",
    // "kindDisplayName": "Formação",
    // "kindSlugDisplayName": "formacao",
    // "situation": "PUBLISHED",
    // "title": "Front-end",
    "subtitle": pageContent.subititle,
  })
})


const port = 5500
server.listen(port, () => {
  console.log('servidor porta ' + port);
})



// ;(async () => {
  
// })();