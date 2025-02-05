export class vehicleLoanPage {
  constructor(page) {
    this.page = page;
    this.elements = {
      learnMore: '//h3[@title="Star Vehicle Loan - Doctor Plus"]//..//span[@class="btn-text"]',
    };
  }
  async openDoctorPlus() {
    await this.page.locator(this.elements.learnMore).click();
  }
}
