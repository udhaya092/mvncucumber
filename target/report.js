$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/FaceBook.feature");
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
formatter.scenarioOutline({
  "name": "Title of your scenario outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "user in home page",
  "keyword": "Given "
});
formatter.step({
  "name": "user enter the details \"\u003cfirstname\u003e\",\"\u003clastname\u003e\",\"\u003cphnno\u003e\",\"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user successfully register",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "phnno",
        "password"
      ]
    },
    {
      "cells": [
        "Udhaya",
        "kumar",
        "9999999",
        "123456"
      ]
    },
    {
      "cells": [
        "ramesh",
        "raja",
        "88888888",
        "56765"
      ]
    },
    {
      "cells": [
        "mahesh",
        "babu",
        "7776567",
        "89876"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Title of your scenario outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user in home page",
  "keyword": "Given "
});
formatter.match({
  "location": "FbRegister.user_in_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter the details \"Udhaya\",\"kumar\",\"9999999\",\"123456\"",
  "keyword": "When "
});
formatter.match({
  "location": "FbRegister.user_enter_the_details(String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user successfully register",
  "keyword": "Then "
});
formatter.match({
  "location": "FbRegister.user_successfully_register()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Title of your scenario outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user in home page",
  "keyword": "Given "
});
formatter.match({
  "location": "FbRegister.user_in_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter the details \"ramesh\",\"raja\",\"88888888\",\"56765\"",
  "keyword": "When "
});
formatter.match({
  "location": "FbRegister.user_enter_the_details(String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user successfully register",
  "keyword": "Then "
});
formatter.match({
  "location": "FbRegister.user_successfully_register()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Title of your scenario outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user in home page",
  "keyword": "Given "
});
formatter.match({
  "location": "FbRegister.user_in_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter the details \"mahesh\",\"babu\",\"7776567\",\"89876\"",
  "keyword": "When "
});
formatter.match({
  "location": "FbRegister.user_enter_the_details(String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user successfully register",
  "keyword": "Then "
});
formatter.match({
  "location": "FbRegister.user_successfully_register()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});