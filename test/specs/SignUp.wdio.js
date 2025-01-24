import SignUp from '../pageobjects/SignUpPage';
import testdatas from '../resourse/testdatas.json';
import elements from '../utils/ElementsUtils';
import AccountInfo from '../pageobjects/AccountInfoPage';
import AddCart from '../pageobjects/AddCartPage';

const signup = new SignUp();
const accountInfo = new AccountInfo();
const addCart = new AddCart();

describe('E2E Workflow Tests', () => {
  before(async () => {
    console.log('Launching application...');
    await signup.LaunchApp();
    await browser.maximizeWindow();
  });

  it('SignUp Workflow', async () => {
    const testName = 'SignupWorkflow';
    try {
      console.log('Launching application for SignUp...');
      await signup.LaunchApp();
      await browser.maximizeWindow();

      const title = await browser.getTitle();
      console.log(`Page title: ${title}`);
      expect(title).toContain(testdatas.title);

      console.log('Executing SignUp workflow...');
      await elements.clickWithTimeout(signup.signupBtn);
      await elements.setValueWithTimeout(signup.name, testdatas.name);
      await elements.setValueWithTimeout(signup.email, testdatas.email);
      await elements.clickWithTimeout(signup.submitBtn);

      console.log('SignUp workflow completed');
      await elements.capturePassScreenshot(testName);
    } catch (error) {
      console.error('Error during SignUp workflow:', error.message);
      await elements.captureFailScreenshot(testName);
      throw error;
    }
  });

  it('Account Info Workflow', async () => {
    const testName = 'AccountInfoWorkflow';
    try {
      console.log('Selecting gender...');
      await elements.clickWithTimeout(accountInfo.gender);

      console.log('Entering password...');
      await elements.setValueWithTimeout(accountInfo.password, testdatas.password);

      console.log('Selecting date of birth...');
      await elements.clickWithTimeout(accountInfo.day);
      await elements.clickWithTimeout(accountInfo.month);
      await elements.clickWithTimeout(accountInfo.year);

      console.log('Entering personal details...');
      await elements.setValueWithTimeout(accountInfo.firstName, testdatas.firstName);
      await elements.setValueWithTimeout(accountInfo.lastName, testdatas.lastName);

      console.log('Entering address details...');
      await elements.setValueWithTimeout(accountInfo.company, testdatas.company);
      await elements.setValueWithTimeout(accountInfo.addressOne, testdatas.addressOne);
      await elements.setValueWithTimeout(accountInfo.addressTwo, testdatas.addressTwo);
      await elements.setValueWithTimeout(accountInfo.state, testdatas.state);
      await elements.setValueWithTimeout(accountInfo.city, testdatas.city);
      await elements.setValueWithTimeout(accountInfo.zipcode, testdatas.zipcode);
      await elements.setValueWithTimeout(accountInfo.mobile, testdatas.mobile);

      console.log('Submitting account creation form...');
      await elements.clickWithTimeout(accountInfo.createAccount);

      const successMessage = await accountInfo.getAccountCreatedMessage();
      console.log(`Success message: ${successMessage}`);
      expect(successMessage).toContain(testdatas.successMessage);

      await elements.clickWithTimeout(accountInfo.continueBtn);
      console.log('Account Info workflow completed.');
      await elements.capturePassScreenshot(testName);
    } catch (error) {
      console.error('Error during Account Info workflow:', error.message);
      await elements.captureFailScreenshot(testName);
      throw error;
    }
  });

  it('AddCart Workflow', async () => {
    const testName = 'AddCartWorkflow';
    try {
      console.log('Viewing product...');
      await elements.clickWithTimeout(addCart.viewProduct);
      const productInformation = await addCart.ProductinformationText();
      console.log(`Product Information: ${productInformation}`);
  
      console.log('Adding product to cart...');
      await elements.clickWithTimeout(addCart.addCart); 
  
      console.log('Validating cart modal...');
      const cartModalText = await addCart.getCartModalText();
      expect(cartModalText).toContain(testdatas.cartAddedMessage);
  
      await elements.clickWithTimeout(addCart.continueShopping);
  
      console.log('Navigating to cart...');
      await elements.clickWithTimeout(addCart.cart);
  
      console.log('Proceed to Checkout...');
      await elements.clickWithTimeout(addCart.proceedCheckout);
  
      console.log('Finalizing checkout...');
      const checkOutCartItemText = await addCart.getCheckoutCartItemText();
      expect(checkOutCartItemText).toContain(productInformation);
      console.log(`Check out Cart Item: ${checkOutCartItemText}`);
      console.log('AddCart workflow completed');
      await elements.capturePassScreenshot(testName);
    } catch (error) {
      console.error('Error during AddCart workflow:', error.message);
      await elements.captureFailScreenshot(testName);
      throw error;
    }
  });
});
