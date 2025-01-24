module.exports = {
  async clickWithTimeout(element, timeout = 5000) {
    try {
      await browser.pause(1000);
      await element.waitForClickable({ timeout });
      await element.click();
    } catch (error) {
      throw new Error(`Error clicking element with timeout: ${error.message}`);
    }
  },

  async setValueWithTimeout(element, value, timeout = 5000) {
    try {
      await browser.pause(1000);
      await element.waitForDisplayed({ timeout });
      await element.setValue(value);
    } catch (error) {
      throw new Error(`Error setting value for element: ${error.message}`);
    }
  },

  async capturePassScreenshot(testName) {
    await browser.saveScreenshot(`./screenshots/${testName}_pass.png`);
  },

  async captureFailScreenshot(testName) {
    await browser.saveScreenshot(`./screenshots/${testName}_fail.png`);
  },
};
