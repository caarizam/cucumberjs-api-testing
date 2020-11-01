Feature: Client Management

  Scenario: Client Check health
    Given The client request for login with "charlie@yopmail.com" and "12gdfgf3456"
    And The client should be logged
    When The client requests for "service" status
    Then The response should be message "completed" and status "up"
