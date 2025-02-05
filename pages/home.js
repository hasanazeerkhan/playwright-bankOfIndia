import { expect } from "@playwright/test";

export class homePage {
  constructor(page) {
    this.page = page;
    this.url = "https://bankofindia.co.in/";
    this.pageTitle =
      "Bank of India - Online Internet Banking and Personal Banking Services";
    this.elements = {
      selectLanguage: {
        english: `//button[@title='English']`,
      },
      topBar: {
        personalLoan: `//div[@class="collapse navbar-collapse navbar-primary-lg"]//a[@class="nav-link" and contains(text(), 'Personal')]//img[@class="activearrow"]`,
      },
    };
  }

  async navigate() {
    await this.page.goto(this.url);
    await expect(this.page).toHaveURL(this.url);
    await expect(this.page).toHaveTitle(this.pageTitle);
  }

  async selectLanguage() {
    await this.page.locator(this.elements.selectLanguage.english).click();
  }

  async openPersonalLoan() {
    await this.page.locator(this.elements.topBar.personalLoan).click();
    await this.page.getByRole("link", { name: "Loans" }).click();
    await this.page
      .locator("#desktopNavBar")
      .getByRole("link", { name: "Vehicle Loan" })
      .click();
  }
}
