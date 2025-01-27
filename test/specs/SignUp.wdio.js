import { Given, When, Then } from '@wdio/cucumber-framework';
import SignUp from '../pageobjects/SignUpPage'; // Ensure the import path is correct
import AccountInfo from '../pageobjects/AccountInfoPage';
import AddCart from '../pageobjects/AddCartPage';
import testdatas from '../resourse/testdatas.json';
import elements from '../utils/ElementsUtils';

// Logging helper
const logger = require('../../wdio.conf').logger;
const signup = new SignUp();
const accountInfo = new AccountInfo();
const addCart = new AddCart();

// Helper for logging test results
const testLogger = (testName, error) => {
  if (error) {
    logger.error(`Error in ${testName}: ${error.message}`);
    elements.captureFailScreenshot(testName);
  } else {
    logger.info(`Success in ${testName}`);
    elements.capturePassScreenshot(testName);
  }
};

Given(/^the application is launched$/, async () => {
  logger.info('Launching application...');
  // Ensure SSL errors are handled if needed (implement filterSSLErrors if necessary)
  await signup.LaunchApp();  // Use the correct SignUp instance
});

Given(/^the browser window is maximized$/, async () => {
  logger.info('Maximizing browser window...');
  await browser.maximizeWindow();
});

When(/^I perform the SignUp workflow$/, async () => {
  const testName = 'SignupWorkflow';
  try {
    const title = await browser.getTitle();
    expect(title).toContain(testdatas.title);

    logger.info('Executing SignUp workflow...');
    await elements.clickWithTimeout(signup.signupBtn); // Correct reference to SignUp object
    await elements.setValueWithTimeout(signup.name, testdatas.name);  // Correct reference to SignUp object
    await elements.setValueWithTimeout(signup.email, testdatas.email);  // Correct reference to SignUp object
    await elements.clickWithTimeout(signup.submitBtn);  // Correct reference to SignUp object

    testLogger(testName);
  } catch (error) {
    testLogger(testName, error);
    throw error;
  }
});

When(/^I perform the Account Info workflow$/, async () => {
  const testName = 'AccountInfoWorkflow';
  try {
    logger.info('Filling in account info...');
    await elements.clickWithTimeout(accountInfo.gender);
    await elements.setValueWithTimeout(accountInfo.password, testdatas.password);
    await elements.clickWithTimeout(accountInfo.day);
    await elements.clickWithTimeout(accountInfo.month);
    await elements.clickWithTimeout(accountInfo.year);

    await elements.setValueWithTimeout(accountInfo.firstName, testdatas.firstName);
    await elements.setValueWithTimeout(accountInfo.lastName, testdatas.lastName);
    await elements.setValueWithTimeout(accountInfo.company, testdatas.company);
    await elements.setValueWithTimeout(accountInfo.addressOne, testdatas.addressOne);
    await elements.setValueWithTimeout(accountInfo.addressTwo, testdatas.addressTwo);
    await elements.setValueWithTimeout(accountInfo.state, testdatas.state);
    await elements.setValueWithTimeout(accountInfo.city, testdatas.city);
    await elements.setValueWithTimeout(accountInfo.zipcode, testdatas.zipcode);
    await elements.setValueWithTimeout(accountInfo.mobile, testdatas.mobile);

    await elements.clickWithTimeout(accountInfo.createAccount);
    const successMessage = await accountInfo.getAccountCreatedMessage();
    expect(successMessage).toContain(testdatas.successMessage);

    await elements.clickWithTimeout(accountInfo.continueBtn);
    testLogger(testName);
  } catch (error) {
    testLogger(testName, error);
    throw error;
  }
});

When(/^I perform the AddCart workflow$/, async () => {
  const testName = 'AddCartWorkflow';
  try {
    logger.info('Adding product to cart...');
    await elements.clickWithTimeout(addCart.viewProduct);
    const productInformation = await addCart.ProductinformationText();

    await elements.clickWithTimeout(addCart.addCart);
    const cartModalText = await addCart.getCartModalText();
    expect(cartModalText).toContain(testdatas.cartAddedMessage);

    await elements.clickWithTimeout(addCart.continueShopping);
    await elements.clickWithTimeout(addCart.cart);
    await elements.clickWithTimeout(addCart.proceedCheckout);

    const checkOutCartItemText = await addCart.getCheckoutCartItemText();
    expect(checkOutCartItemText).toContain(productInformation);

    testLogger(testName);
  } catch (error) {
    testLogger(testName, error);
    throw error;
  }
});

Then(/^the workflow should complete successfully$/, () => {
  logger.info('Workflow validated successfully.');
});
