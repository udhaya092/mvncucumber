
@tag
Feature: Title of your feature
  I want to use this template for my feature file

 

  @tag2
  Scenario Outline: Title of your scenario outline
    Given cus login fb
    When cus enter details "<user>","<passw>"
    Then successfully login

    Examples: 
      | user  | passw   | 
      | name1 |  3335   | 
      | name2 | 098767  | 
