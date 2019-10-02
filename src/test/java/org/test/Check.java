package org.test;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Check {
	public static WebDriver d;
		
	@Given("^user in guru home page$")
	public void user_in_guru_home_page() {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\udhaya\\Documents\\MvnCucumber\\driver\\chromedrive.exe");
		   d=new ChromeDriver();
		   d.get("http://demo.guru99.com/telecom/index.html");
	    
	}

	@When("^user navigate to nxt page$")
	public void user_navigate_to_nxt_page() throws InterruptedException {
		Thread.sleep(5000);
		WebElement a=d.findElement(By.xpath("(//a[text()='Add Customer'])[1]"));
		a.click();
	   
	}

	@Then("^user successfully print the text$")
	public void user_successfully_print_the_text() {
		WebElement te=d.findElement(By.xpath("//h1[text()='Add Customer']"));
		String t = te.getText();
		System.out.println(t);
	    
	}



}
