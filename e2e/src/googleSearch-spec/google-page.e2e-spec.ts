import { browser } from 'protractor';
import { googleLogic } from '../googleSearch-logic/google-page-logic';

describe('Add a link', () => {
    const googleSearchPage: googleLogic = new googleLogic();

    beforeEach(() => {
        browser.waitForAngularEnabled(false);     
    });

    it('Open-google-page', async () => {
        await browser.get(browser.params.URL.baseUrl);
        await browser.sleep(2000);   
    });

    it('Enter Search Value', async () => {
        await googleSearchPage.searchOnGoogle('iphone');
    });

});
//test