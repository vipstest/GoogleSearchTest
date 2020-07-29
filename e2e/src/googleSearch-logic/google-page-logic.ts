import { browser } from 'protractor';
import { GoogleSearchPage } from '../googleSearch-po/google-page-po';

const googlePage: GoogleSearchPage = new GoogleSearchPage();

export class googleLogic {
    public async searchOnGoogle(searchWord: string): Promise<void> {

        await googlePage.enterSearchValue().sendKeys(searchWord);
        await browser.sleep(2000);
        await googlePage.clickGoogleSearch().click();
        await browser.sleep(2000);

    }
}

