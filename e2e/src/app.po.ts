import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get('/intro') as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('mat-toolbar mat-toolbar-row h1')).getText() as Promise<string>;
  }

  getContentText(): Promise<string> {
    return element(by.css('app-root app-intro span')).getText() as Promise<string>;
  }
}
