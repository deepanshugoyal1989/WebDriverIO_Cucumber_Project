Feature: Marvel Characters

  Scenario: Validate details of marvel characters
    Given I create a valid request to get details of marvel characters
    When I send a request
    Then I should get response with status code 200
    And I should get all marvel characters details with following parameters
      | Response_Parameters |
      | id                  |
      | name                |
      | description         |
      | modified            |
      | resourceURI         |
      | thumbnail           |
      | comics              |
      | stories             |
      | events              |
      | urls                |
