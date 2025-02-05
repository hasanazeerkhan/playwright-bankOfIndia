import { test } from "@playwright/test";
import { BasePage } from "../pages/base.js";
import { HomePage } from "../pages/home.js";
import { VehicleLoanPage } from "../pages/vehicleLoan.js";
import { DoctorPlusPage } from "../pages/doctorPlus.js";
import { AboutPage } from "../pages/aboutUs.js";

test.beforeAll(async ({ browser }) => {
  // setup code if needed
});

test.describe("Bank of India", async () => {
  test("Loan calculation", async ({ testPage }) => {
    const home = new HomePage(testPage);
    test('Loan calculation', async ({ testPage }) => {
        const home = new HomePage(testPage);
        const vehicleLoan = new VehicleLoanPage(testPage);
        const doctorPlus = new DoctorPlusPage(testPage);
    await home.openVehicleLoan();
    await vehicleLoan.openDoctorPlus();
    await doctorPlus.selectCalculateTab();
    await doctorPlus.calculate();
    await doctorPlus.printCalculatedValues();
  })
})
});

  test("About us", async ({ aboutPage }) => {
    const about = new aboutPage(aboutPage);
    const base = new BasePage(aboutPage);

    await base.openAboutUs();
    await base.page.waitForSelector('selector-for-about-us-page-element'); // Replace with actual selector
    await about.viewBio();
    await about.printBio();
    await about.closePopup();
  });

  test("New tab", async ({ testPage }) => {
    const home = new HomePage(testPage);

    test('New tab', async ({ testPage }) => {
    await home.selectLanguage();
  });

        await home.navigate();
        await home.selectLanguage();
    })
