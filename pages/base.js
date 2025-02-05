import { expect } from "@playwright/test";

export class basePage {
  constructor(page) {
    this.page = page;
    this.goToUrl = "https://bankofindia.co.in/about-us";
    this.url = "https://bankofindia.co.in/about-us";
    this.pageTitle = "About Bank of India | Leading Bank in India - BOI ";
  }
  async openAboutUs() {
    // This method navigates to the "About Us" section of the Bank of India website
    await this.page.goto(this.url);

    // Verifying that the current page URL matches the expected URL and the page title matches the expected title
    await expect(this.page).toHaveURL(this.url);
    await expect(this.page).toHaveTitle(this.pageTitle);
  }
}
