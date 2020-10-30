Feature: Client Management

  Scenario: Client registration
    Given The client request for login with "charlie@yopmail.com" and "12gdfgf3456"
    Then The client should be logged
