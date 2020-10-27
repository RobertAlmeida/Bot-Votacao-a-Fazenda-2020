const puppeteer = require('puppeteer');

async function x() {
    for (let index = 0; index < 1500; index++) {

        const browser = await puppeteer.launch({
            headless: false
        });
        const page = await browser.newPage();
        await page.goto('https://afazenda.r7.com/a-fazenda-12/votacao');
        await page.click('#box_5f5fb3b7416eb9a8d0000891 > div > div > div > div > section > div.voting-view > figure:nth-child(1) > button');

        await page.keyboard.press('Tab');
        await page.keyboard.press('Enter');
        await delay(2000);
        await browser.close();
        console.log('Votei ' + index + ' ...');


    }

    x();
}

x();

function delay(time) {
    return new Promise(function(resolve) {
        setTimeout(resolve, time)
    });
}
