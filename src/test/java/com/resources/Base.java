package com.resources;

import org.openqa.selenium.WebElement;

import com.stepdefinition.Hook;

public class Base {
		

		public void launch(String url) {
			Hook.d.get(url);
		}
			
		public void key(WebElement e, String name)
		{
			e.sendKeys(name);
		}
		public void bn(WebElement e1)
		{
			e1.click();
		}

	}



