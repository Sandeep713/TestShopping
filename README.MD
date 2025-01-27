E2E Workflow Automation Tests
* This project implements end-to-end (E2E) automation tests for a web application. 
* The workflows covered include user sign-up, account information submission, and adding items to the cart. 
* It is designed using WebdriverIO, the Mocha framework, and Allure reporting.

Project Structure
Folders and Files
* pageobjects: Contains page object classes for different pages (e.g., SignUpPage, AccountInfoPage, AddCartPage).
* resourse: Holds test data files like testdatas.json.
* utils: Contains utility methods like ElementsUtils for reusable element interaction logic.
* test/specs: Includes test scripts for workflows.

Key Files
* SignUpPage.js: Handles the signup page actions and locators.
* AccountInfoPage.js: Manages account information workflows.
* AddCartPage.js: Handles add-to-cart functionality.
* SignUp.wdio.js: Main test script combining all workflows.
* wdio.conf.js: WebdriverIO configuration file.

Installation and Setup
Prerequisites
* Node.js (v14+ recommended)
* Chrome browser
* Allure Command Line (for test reports)

Steps to Set Up the Project
* Clone the repository: git clone <repository_url>
* Navigate to the project folder: cd <project_folder>
* Install dependencies: npm install

Running Tests
Execute All Tests
* To run the complete E2E workflow: npx wdio run ./wdio.conf.js

Execute a Specific Test
* To run a specific test (e.g., SignUp): npx wdio run ./wdio.conf.js --spec ./test/specs/SignUp.wdio.js

Workflows
1. SignUp Workflow
 * Launches the application.
 * Performs user signup with test data.
 * Validates successful signup.
2. Account Info Workflow
 * Enters and submits user account information.
 * Validates account creation success message.
3. AddCart Workflow
 * Adds a product to the cart.
 * Validates the cart and proceeds to checkout.

Configuration
* wdio.conf.js
* Capabilities: Set for Chrome.
* Max Instances: Configured for sequential execution (1 instance).
* Framework: Mocha.
* Reporters: Includes Allure and Spec reporters.

Application URL
* Located in the AppUrl file

Reports
Allure Reports
* Install Allure Command Line if not installed: npm install -g allure-commandline --save-dev
* Generate and open the report: 
  allure generate allure-results --clean
  allure open

Error Handling
* Screenshots are captured on test pass/fail.
* Errors are logged with meaningful messages for debugging.
