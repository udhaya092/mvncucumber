package com.stepdefinition;

import com.objectrepository.Register;
import com.resources.Base;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class FbRegister extends Base{
	Register r=new Register();
	

	@Given("^user in home page$")
	public void user_in_home_page() {
		launch("https://www.facebook.com/");
	}

	@When("^user enter the details \"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\"$")
	public void user_enter_the_details(String a1, String a2, String a3, String a4) {
		key(r.getFname(), a1);
		key(r.getLname(), a2);
		key(r.getPhno(), a3);
		key(r.getPswd(), a4);
		//bn(r.getGender());
		bn(r.getSignup());
	
	}

	@Then("^user successfully register$")
	public void user_successfully_register() {
		System.out.println("successfully register");

	
	}


	
	
}
