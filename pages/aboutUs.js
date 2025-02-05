import { expect } from "@playwright/test";

export class AboutPage {
  constructor(page) {
    this.page = page;
    this.url = `https://bankofindia.co.in/about-us`;
    this.elements = {
      tab: {
        ourLeaders: `#tab-B`,
        // XPath selector to locate the Managing Director and CEO section
        // XPath selector to locate the "View Bio" link for the Managing Director and CEO
        viewBio: `//div[@class="panel border-top py-2 d-block"]//..//a[@id="viewBioMANAGINGDIRECTORANDCEO0"]`,
        viewBio: `//div[@class="panel border-top py-2 d-block"]//..//a[@id="viewBioMANAGINGDIRECTORANDCEO0"]`,
        bioContent: `//div[@id="viewBioBodyContent"]//div[@class="col-lg-8"]//p`,
        bioContentFirst: `//div[@id="viewBioBodyContent"]//div[@class="col-lg-8"]//p[contains(text() , 'Shri Rajneesh Karnatak has assumed')]`,
        closePopup: `//button[@onclick="closeBioData()"]//span[@aria-hidden="true"]`,
      },
    };
  }

  async viewBio() {
    await this.page.locator(this.elements.tab.ourLeaders).click();
    await this.page.locator(this.elements.tab.md).click();
    await this.page.locator(this.elements.tab.viewBio).click();
  }

  async printBio() {
    const bioText = await this.page.locator(this.elements.tab.bioContent).allTextContents();
    for (let textToBePrinted of bioText) {
      console.log(textToBePrinted);
    }
  }

  async closePopup() {
    await this.page.locator(this.elements.tab.closePopup).click();
    await this.page.waitForLoadState('networkidle');
    await expect(this.page).toHaveURL(this.url);
  }
}
