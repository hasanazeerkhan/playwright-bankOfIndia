export class doctorPlusPage {
  constructor(page) {
    this.page = page;
    this.elements = {
      calculate: '//span[@data-lfr-editable-id="title5"]',
      repayment: `#secondOutput`,
      totalLoanAmount: `#totalAmount`,
      monthlyLoanEMI: `#firstOutput`,
      grossMonthlyIncome: `#income`,
      grossMonthlyDeduction: `#deduction`,
      loanAmount: `#amount`,
      tenure: `#periodMonths`,
      interest: `#interest`,
    };
    this.input = {
      grossMonthlyIncome: "50000",
      grossMonthlyDeduction: "10250.23",
      loanAmount: "15000000",
      tenure: "24",
      interest: "5",
    };
  }

  async selectCalculateTab() {
    await this.page.locator(this.elements.calculate).click();
  }

  async calculate() {
    await this.page
      .locator(this.elements.grossMonthlyIncome)
      .fill(this.input.grossMonthlyIncome);
    await this.page
      .locator(this.elements.grossMonthlyDeduction)
      .fill(this.input.grossMonthlyDeduction);
    await this.page
      .locator(this.elements.loanAmount)
      .fill(this.input.loanAmount);
    await this.page.locator(this.elements.tenure).fill(this.input.tenure);
    await this.page.locator(this.elements.interest).fill(this.input.interest);
    await this.page.locator('button[type="submit"]').click();
  }

  async printCalculatedValues() {
    let totalRepayment = await this.page
      .locator(this.elements.repayment)
      .textContent();
    let totalLoanAmount = await this.page
      .locator(this.elements.totalLoanAmount)
      .textContent();
    let monthlyLoanEMI = await this.page
      .locator(this.elements.monthlyLoanEMI)
      .textContent();
    console.log(
      `Total Repayment: ${totalRepayment}`,
      `Total Loan Amount: ${totalLoanAmount}`,
      `Monthly Loan EMI: ${monthlyLoanEMI}`
    );
  }
}
