const puppeteer = require('puppeteer');

exports.web_scrawper = async function main() {
          const browser = await puppeteer.launch({headless: true});
          const page = await browser.newPage();
          const categorie = 'marketing'
          await page.goto(`https://explodingtopics.com/${categorie}-topics-right-now`);
            
          const elements = await page.evaluate(() => Array.from(document.querySelectorAll('div.tileStyle.spikeFlag > a > div > div.topicInfoContainer > div.tileKeywordContainer > div.tileKeyword')).map(el => el.textContent));
          const desc_elements = await page.evaluate(() => Array.from(document.querySelectorAll('div.tileStyle.spikeFlag > a > div > div.topicInfoContainer > div.tileDescription')).map(el => el.textContent));
          
          await browser.close();
          return [elements, desc_elements, categorie];
  }
