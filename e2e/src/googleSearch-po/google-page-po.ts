import { by, element, ElementFinder } from 'protractor';

export class GoogleSearchPage {

  public enterEmail(): ElementFinder {
    return element(by.xpath('//*[contains(@id,"fakebox-input")]'));
  }

  public enterSearchValue(): ElementFinder {
    return element(by.css('input[title="Search"]'));
  }

  public clickGoogleSearch(): ElementFinder {
    return element(by.buttonText('Google Search'));
  }

}