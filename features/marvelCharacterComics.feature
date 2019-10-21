Feature: Marvel Character Comics
Scenario Outline: Validate number of Comics on a web page for a particular marvel character
Given I create an request to get details of marvel character with id <marvelCharacterId>
When I send a request
Then I should get response with status code 200
And I should validate number of comics on a web page as per api response
Examples:
| marvelCharacterId |
| 1010699           |