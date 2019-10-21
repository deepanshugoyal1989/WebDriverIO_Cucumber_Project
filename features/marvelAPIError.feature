Feature: Marvel API Errors

Scenario Outline: Validate error response for incorrect value of request's query parameters
Given I create an invalid request with incorrect value <value> of query parameter <qs>
When I send a request
Then I should get response with status code 401
And I should get message as "InvalidCredentials"
Examples:
| qs     | value           |
| ts     | incorrectTS     |
| apikey | IncorrectApiKey |
| hash   | IncorrectHash   |


Scenario: Validate error response for missing request parameters
Given I create an invalid request with missing query parameter
When I send a request
Then I should get response with status code 409
And I should get message as "MissingParameter"
