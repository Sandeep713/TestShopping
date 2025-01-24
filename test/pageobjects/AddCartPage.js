import elements from '../utils/ElementsUtils';

class AddCart {
  get viewProduct() { return $("//a[contains(text(),'View Product')]"); }
  async clickViewProduct() { await elements.clickWithTimeout(this.viewProduct); }

  get productInformationText() { return $("//div[@class='product-information']/h2"); }
  async ProductinformationText() {
    await this.productInformationText.waitForDisplayed({ timeout: 10000 });
    return this.productInformationText.getText();
  }

  get addCart() { return $("//button[@class='btn btn-default cart']"); }
  async clickAddCart() { await elements.clickWithTimeout(this.addCart); }

  get cartModal() { return $("//div[@id='cartModal']//div[@class='modal-body']"); }
  async getCartModalText() {
    await this.cartModal.waitForDisplayed({ timeout: 5000 });
    return this.cartModal.getText();
  }

  get continueShopping() { return $("//button[contains(text(),'Continue Shopping')]"); }
  async clickContinueShopping() { await elements.clickWithTimeout(this.continueShopping); }

  get cart() { return $("//a[contains(text(),'Cart')]"); }
  async clickCart() { await elements.clickWithTimeout(this.cart); }

  get cartDescription() { return $("//table[@class='cart_description']"); }
  async getCartDescriptionText() {
    await this.cartDescription.waitForDisplayed({ timeout: 5000 });
    return this.cartDescription.getText();
  }

  get proceedCheckout() { return $("//a[@class='btn btn-default check_out'][contains(.,'Proceed To Checkout')]"); }
  async clickProceedCheckout() { await elements.clickWithTimeout(this.proceedCheckout); }

  get checkoutCartItem() { return $("//a[@href='/product_details/1']"); }
  async getCheckoutCartItemText() {
    await this.checkoutCartItem.waitForDisplayed({ timeout: 5000 });
    return this.checkoutCartItem.getText();
  }
}

export default AddCart;
