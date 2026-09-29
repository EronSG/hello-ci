const { Builder, By } = require("selenium-webdriver");

describe("Home Page E2E Test", () => {
    let driver;

    beforeAll(async () => {
        driver = await new Builder()
            .forBrowser("chrome")
            .build();
    });

    afterAll(async () => {
        if (driver) {
            await driver.quit();
        }
    });

    test("should display the correct header", async () => {
        await driver.get("http://localhost:3000");

        const header = await driver.findElement(By.css("h1"));

        const text = await header.getText();

        expect(text).toBe("Welcome to CI/CD");
    });
});