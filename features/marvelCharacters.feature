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

#  Scenario Outline: Validate error response for incorrect value of request's query parameters
#    Given I create an invalid request with incorrect value <value> of query parameter <qs>
#    When I send a request
#    Then I should get response with status code 401
#    And I should get message as "InvalidCredentials"
#    Examples:
#      | qs     | value           |
#      | ts     | incorrectTS     |
#      | apikey | IncorrectApiKey |
#      | hash   | IncorrectHash   |
#
#
#  Scenario: Validate error response for missing request parameters
#    Given I create an invalid request with missing query parameter
#    When I send a request
#    Then I should get response with status code 409
#    And I should get message as "MissingParameter"
#
#  Scenario Outline: Validate number of Comics on a web page for a particular marvel character
#    Given I create an request to get details of marvel character with id <marvelCharacterId>
#    When I send a request
#    Then I should get response with status code 200
#    And I should validate number of comics on a web page as per api response
#    Examples:
#      | marvelCharacterId |
#      | 1010699           |