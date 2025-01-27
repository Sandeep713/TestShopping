module.exports = {
  async clickWithTimeout(element, timeout = 10000) {
    try {
      await browser.pause(2000); // Pause to ensure elements are loaded
      await element.waitForDisplayed({ timeout });
      await element.waitForClickable({ timeout });
      await element.click();
    } catch (error) {
      throw new Error(`Error clicking element with timeout: ${error.message}`);
    }
  },

  async setValueWithTimeout(element, value, timeout = 10000) {
    try {
      await browser.pause(1000);
      await element.waitForDisplayed({ timeout });
      await element.setValue(value);
    } catch (error) {
      throw new Error(`Error setting value for element: ${error.message}`);
    }
  },

  async capturePassScreenshot(testName) {
    try {
      if (await browser.getWindowHandle()) {
        await browser.saveScreenshot(`./screenshots/pass_${testName}.png`);
      } else {
        console.warn('Cannot take screenshot - browser context missing.');
      }
    } catch (error) {
      console.error('Failed to capture pass screenshot:', error.message);
    }
  },

  async captureFailScreenshot(testName) {
    await browser.saveScreenshot(`./screenshots/${testName}_fail.png`);
  },
};
