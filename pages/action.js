export class actionClass {
  constructor(page) {
    this.page = page;
  }
  async screenshot() {
    const date = new Date().toLocaleString();
    await this.page.screenshot({ path: `screenshot.png` });
  }
}
