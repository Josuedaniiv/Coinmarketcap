Feature: CoinMarketCop language tests

  Scenario: Verify language in the Home Page
    When I visit coinmarketcap.com
    And I click on the burger icon
    Then I can see that the top menu options are in "<defaultLaguage>"
    When I change to "<targetLanguage>"
    And I click on the burger icon
    Then I can see that the top menu options are in "<targetLanguage>"

    Examples: 
      | defaultLaguage | targetLanguage |
      | English        | Español        |
