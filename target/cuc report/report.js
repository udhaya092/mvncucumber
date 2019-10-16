$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/DataTable1.feature");
formatter.feature({
  "name": "Title of your feature",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "name": "Title of your scenario",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "user in home page",
  "keyword": "Given "
});
formatter.match({
  "location": "Web1.user_in_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter deatils",
  "rows": [
    {
      "cells": [
        "udhaya",
        "murugesan",
        "9507731092",
        "123456"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "Web1.user_enter_deatils(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I validate the outcomes",
  "keyword": "Then "
});
formatter.match({
  "location": "Web1.i_validate_the_outcomes()"
});
formatter.result({
  "status": "passed"
});
});