const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

async function scrapeElement() {
    // Set Chrome options for headless mode
    const options = new chrome.Options();
    options.addArguments('--headless');

    // Create a WebDriver instance
    const driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(options)
        .build();

    try {
        // Navigate to the webpage you want to scrape
        await driver.get('https://example.com');

        // Wait until the paragraph element is found
        await driver.wait(until.elementLocated(By.css('p')), 10000);

        // Find the paragraph element
        const element = await driver.findElement(By.css('p'));

        // Get the text content of the element
        const textContent = await element.getText();

        // Log the text content to the console
        console.log('Scraped element:', textContent);
    } finally {
        // Close the browser
        await driver.quit();
    }
}

// Call the function to start scraping
scrapeElement();
