import urls from '../resourse/urls.json';
import elements from '../utils/ElementsUtils';

class SignUpPage {
  get signupBtn() { return $("//a[@href='/login' and contains(., 'Signup / Login')]"); }
  async clickSignupBtn() { await elements.click(this.signupBtn); }

  get name() { return $("//input[@placeholder='Name'][@name='name']"); }
  async setName() { await elements.setValue(this.name, testdatas.name); }

  get email() { return $("(//input[@placeholder='Email Address'][@name='email'])[2]"); }
  async setEmail() { await elements.setValue(this.email, testdatas.email); }

  get submitBtn() { return $("//button[contains(text(),'Signup')]"); }
  async clickSubmitBtn() { await elements.click(this.submitBtn); }

  async LaunchApp() {
    await browser.url(urls.AppUrl);
  }
}

export default SignUpPage;