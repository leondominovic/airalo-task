import { test, expect } from '@playwright/test';
import {HomepagePom} from "../lib/pom/homepage.pom";

test('Select a package for Japan', async ({ page }) => {

  const homePage = new HomepagePom(page);

  await test.step("Open Airalo's Website", async () => {
    await homePage.openHomePage();
    await homePage.closeTenMillionUserModal();
  });

  await test.step("Search for Japan", async () => {
    await homePage.searchForLocalSim("Japan");
  });

  await test.step("Select an eSIM Package", async () => {
    await homePage.clickToBuyNthESim(0);
  });

  await test.step("Verify Package Details", async () => {
    await expect.soft(homePage.eSimDetailsOperatorValue).toHaveText("Moshi Moshi");
    await expect.soft(homePage.eSimDetailsCoverageValue).toHaveText("Japan");
    await expect.soft(homePage.eSimDetailsDataValue).toHaveText("1 GB");
    await expect.soft(homePage.eSimDetailsValidityValue).toHaveText("7 Days");
    await expect.soft(homePage.eSimDetailsPriceValue).toHaveText("$4.50 USD");
  });
});