import elements from '../utils/ElementsUtils';

class AccountInfo {
  get gender() { return $("//input[@id='id_gender1']"); }
  async selectGender() { await elements.click(this.gender); }

  get password() { return $("//input[@id='password']"); }
  async setPassword(value) { await elements.setValue(this.password, value); }

  get day() { return $("//select[@id='days']"); }
  async selectDay() { await elements.click($("//select[@id='days']/option[@value='20']")); }

  get month() { return $("//select[@id='months']"); }
  async selectMonth() { await elements.click($("//select[@id='months']/option[@value='1']")); }

  get year() { return $("//select[@id='years']"); }
  async selectYear() { await elements.click($("//select[@id='years']/option[@value='2000']")); }

  get newsletter() { return $("//input[@id='newsletter']"); }
  async selectNewsletter() { await elements.click(this.newsletter); }

  get optin() { return $("//input[@id='optin']"); }
  async selectOptin() { await elements.click(this.optin); }

  get firstName() { return $("//input[@id='first_name']"); }
  async setFirstName(value) { await elements.setValue(this.firstName, value); }

  get lastName() { return $("//input[@id='last_name']"); }
  async setLastName(value) { await elements.setValue(this.lastName, value); }

  get company() { return $("//input[@id='company']"); }
  async setCompany(value) { await elements.setValue(this.company, value); }

  get addressOne() { return $("//input[@id='address1']"); }
  async setAddressOne(value) { await elements.setValue(this.addressOne, value); }

  get addressTwo() { return $("//input[@id='address2']"); }
  async setAddressTwo(value) { await elements.setValue(this.addressTwo, value); }

  get state() { return $("//input[@id='state']"); }
  async setState(value) { await elements.setValue(this.state, value); }

  get city() { return $("//input[@id='city']"); }
  async setCity(value) { await elements.setValue(this.city, value); }

  get zipcode() { return $("//input[@id='zipcode']"); }
  async setZipcode(value) { await elements.setValue(this.zipcode, value); }

  get mobile() { return $("//input[@id='mobile_number']"); }
  async setMobile(value) { await elements.setValue(this.mobile, value); }

  get createAccount() { return $("//button[contains(text(),'Create Account')]"); }
  async clickCreateAccount() { await elements.click(this.createAccount); }

  get accountCreatedText() { return $("//section[@id='form']"); }
  async getAccountCreatedMessage() {
    await this.accountCreatedText.waitForDisplayed({ timeout: 10000 });
    return this.accountCreatedText.getText();
  }

  get continueBtn() { return $("//a[contains(text(),'Continue')]"); }
  async clickContinue() { await elements.click(this.continueBtn); }
}

export default AccountInfo;