const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());

exports.webScrawper = async function webScrawper() {
          const browser = await puppeteer.launch({headless: true});
          const page = await browser.newPage();
          await page.setViewport({
                width: 640,
                height: 480,
                deviceScaleFactor: 1,
              })
          const categorie = 'marketing'
          await page.goto(`https://explodingtopics.com/${categorie}-topics-last-6-months`);
            
          const elements = await page.evaluate(() => Array.from(document.querySelectorAll('div.tileStyle.spikeFlag > a > div > div.topicInfoContainer > div.tileKeywordContainer > div.tileKeyword')).map(el => el.textContent));
          const desc_elements = await page.evaluate(() => Array.from(document.querySelectorAll('div.tileStyle.spikeFlag > a > div > div.topicInfoContainer > div.tileDescription')).map(el => el.textContent));
          
          //await browser.close();
          return [elements, desc_elements, categorie];
}

exports.create_design = async function create_design(name, description, date){

        
        const browser = await puppeteer.launch({headless: false});
        const page = await browser.newPage();
        await page.setViewport({width: 800, height: 600, deviceScaleFactor: 1})

        await page.goto('https://www.canva.com/login/')
        await page.type('[name="email"]', process.env.CANVA_LOGIN)
        await page.type('[name="password"]', process.env.CANVA_PASSWORD)
        await page.keyboard.press('Enter')
        await page.waitForNavigation()
        await page.goto('https://www.canva.com/login/switch?brand=BACVmGfbUOo')
        await page.goto('https://www.canva.com/design/DAEgSNGz4FU/zR7BEJ9G7pF0alQ-_RMTYA/edit')
        await page.waitForSelector('._8wBGSw')
        var elements = await page.$$('._8wBGSw')

        await page.waitForTimeout(2000)
        await elements[1].click()
        await elements[1].click()
        await page.waitForSelector('.JsGRdQ')
        await page.click('.JsGRdQ', { clickCount: 3 })
        await page.type('.JsGRdQ', description)

        await page.waitForTimeout(2000)
        await elements[0].click()
        await elements[0].click()
        await page.waitForSelector('.JsGRdQ')
        await page.click('.JsGRdQ', { clickCount: 3 })
        await page.type('.JsGRdQ', name)

        await page.waitForTimeout(2000)
        await elements[2].click()
        await elements[2].click()
        await page.waitForSelector('.JsGRdQ')
        await page.click('.JsGRdQ', { clickCount: 3 })
        await page.type('.JsGRdQ', date)

        await page.click('[aria-haspopup="menu"]')
        await page.click('.Fu0fvw.lnCPoA.fP4ZCw.Yp81Yw')
        await page.type('.Fu0fvw.lnCPoA.fP4ZCw.Yp81Yw.noenSA', name + ' - ' + date)

        await page.waitForSelector('[aria-label="Todas as opções de publicação"]')
        await page.click('[aria-label="Todas as opções de publicação"]')
        await page.waitForSelector('[aria-label="Ver tudo"]')
        await page.click('[aria-label="Ver tudo"]')
        await page.waitForSelector('[aria-label="Google Drive"]')
        await page.click('[aria-label="Google Drive"]') 

        await page.waitForTimeout(5000)
        let files_drive = await page.$$('.Sbf1Gw')
        await files_drive[2].click()

        await page.waitForTimeout(5000)
        let documents_drive = await page.$$('.Sbf1Gw')
        await documents_drive[12].click()

        await page.waitForTimeout(5000)
        let prog_drive = await page.$$('.Sbf1Gw')
        await prog_drive[4].click()

        await page.waitForTimeout(5000)
        await page.click('[type="submit"')

        await page.waitForTimeout(10000)
        await browser.close()
}