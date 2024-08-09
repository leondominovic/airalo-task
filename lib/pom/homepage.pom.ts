import {Locator, Page} from "@playwright/test";


export class HomepagePom {
    protected readonly page: Page;
    readonly title: Locator;
    readonly tenMillionUserContainer: Locator;
    readonly tenMillionUserModalCloseButton: Locator;
    readonly searchField: Locator;
    readonly localCountryList: Locator;
    readonly eSimDetails: Locator;
    readonly eSimDetailsOperatorValue: Locator;
    readonly eSimDetailsCoverageValue: Locator;
    readonly eSimDetailsDataValue: Locator;
    readonly eSimDetailsValidityValue: Locator;
    readonly eSimDetailsPriceValue: Locator;
    readonly eSimItem: Locator;

    constructor(page: Page) {
        this.page = page;
        this.title = page.getByTestId('homepage-title')
        this.tenMillionUserContainer = page.locator(".ten-million-users-container ");
        this.tenMillionUserModalCloseButton = page.getByTestId("close-button");
        this.searchField = page.getByTestId("search-input");
        this.localCountryList = page.locator(".countries-list").first();
        this.eSimDetails = page.getByTestId("sim-detail-header");
        this.eSimDetailsOperatorValue = this.eSimDetails.getByTestId("sim-detail-operator-title");
        this.eSimDetailsCoverageValue = this.eSimDetails.getByTestId("COVERAGE-value");
        this.eSimDetailsDataValue = this.eSimDetails.getByTestId("DATA-value");
        this.eSimDetailsValidityValue = this.eSimDetails.getByTestId("VALIDITY-value");
        this.eSimDetailsPriceValue = this.eSimDetails.getByTestId("PRICE-value");
        this.eSimItem = page.getByTestId("sim-package-item")
    }

    public async openHomePage() {
        await this.page.goto(process.env.UI_URL!);
        await this.title.waitFor();
    }

    public async closeTenMillionUserModal() {
        await this.tenMillionUserContainer.waitFor();
        await this.tenMillionUserModalCloseButton.click();
    }

    public async searchForLocalSim(country: string) {
        await this.searchField.fill(country);
        await this.localCountryList.getByTestId(`${country}-name`).click();
    }

    public async clickToBuyNthESim(order: number) {
        await this.eSimItem.nth(order).getByText("Buy Now").click();
    }
}