
@tag
Feature: Title of your feature
  I want to use this template for my feature file



  @tag2
  Scenario Outline: Title of your scenario outline
    Given user in home page
    When user enter the details "<firstname>","<lastname>","<phnno>","<password>"
    Then user successfully register

    Examples: 
      | firstname  | lastname | phnno     | password |
   		| Udhaya     | kumar    | 9999999   |  123456  |
   		|ramesh      | raja     | 88888888  |  56765   |
   		|mahesh      | babu     | 7776567   |  89876   |
