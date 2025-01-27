Feature: End-to-End Workflow Tests
  As a user, I want to perform end-to-end tests for SignUp, AccountInfo, and AddCart workflows.

  Scenario: Execute SignUp workflow
    Given the application is launched
    And the browser window is maximized
    When I perform the SignUp workflow
    Then the workflow should complete successfully

  Scenario: Execute Account Info workflow
    When I perform the Account Info workflow
    Then the workflow should complete successfully

  Scenario: Execute AddCart workflow
    When I perform the AddCart workflow
    Then the workflow should complete successfully
