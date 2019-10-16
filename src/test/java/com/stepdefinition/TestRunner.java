package com.stepdefinition;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)

@CucumberOptions(features="src\\test\\resources\\FaceBook.feature",glue="com.stepdefinition",dryRun=false,monochrome=true,plugin= {"pretty","html:target","json:target\\jen.json"})
public class TestRunner {

}
