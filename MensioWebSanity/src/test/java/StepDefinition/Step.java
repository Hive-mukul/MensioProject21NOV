package StepDefinition;

import java.util.concurrent.TimeUnit;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import junit.framework.Assert;

public class Step extends CommonUtilities{
	
	
	///////////Check the login feature of Mensio Web Application\\\\\\\\\\\\\\
	
	@Given("^user is on the login screen$")
	public void user_is_on_the_login_screen() {
	    
		CommonUtilities.Chrome();
		
	}

	@When("^user enter email and password$")
	public void user_enter_email_and_password() {
		driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div/form/div[1]/div/input")).sendKeys("testqa@thehive.ai");
		driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div/form/div[2]/div/input")).sendKeys("Tester@1234");
		System.out.println("User entered valid email and password");
	}

	@And("^user click on login button$")
	public void user_click_on_login_button() {
		driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div/form/div[4]")).click();

		System.out.println("User clicked on Login button");
	}

	@Then("^user is navigated to home screen$")
	public void user_is_navigated_to_home_screen() {
		WebElement HomeElement = driver.findElement(By.xpath("//*[@id=\"root\"]/div[1]/div[1]/div/a[1]"));
		Assert.assertEquals(true, HomeElement.isDisplayed());
		driver.findElement(By.className("jss121")).click();
		System.out.println("User navigated to home screen");
	}
	
	
	///////////Check all items visibility on home screen\\\\\\\\\\

	@Then("^Television by Brand card is visible$")
	public void Television_by_Brand_card_is_visible() { 
		WebElement HomeElement = driver.findElement(By.xpath("//*[@id=\"sponsorshipEarnedMedia\"]/div"));
		Assert.assertEquals(true, HomeElement.isDisplayed());
	    System.out.println("Television by Brand card is visible");
	}

	@Then("^Television by Team card is visible$")
	public void Television_by_Team_card_is_visible() {
		WebElement HomeElement = driver.findElement(By.xpath("//*//span[normalize-space()='Television - By Team']"));
		Assert.assertEquals(true, HomeElement.isDisplayed());
	    System.out.println("Television by Team Card is visible");
	}


	@Then("^Television Team as Brands Card is visible$")
	public void Television_Team_as_Brands_Card_is_visible() {
		WebElement HomeElement = driver.findElement(By.xpath("//*[@id=\"teamExposure\"]/div"));
		Assert.assertEquals(true, HomeElement.isDisplayed());
	   System.out.println("Television Team as Brands Card is visible Card is visible");
	}


	@Then("^Streaming Originals Card is visible$")
	public void streaming_Originals_Card_is_visible() {
		WebElement HomeElement = driver.findElement(By.xpath("//*[@id=\"streaming\"]/div"));
		Assert.assertEquals(true, HomeElement.isDisplayed());
	    System.out.println("Streaming Originals Card is visible");
	  
	}

	@Then("^Theatrical Releases Card is visible$")
	public void theatrical_Releases_Card_is_visible() {
		WebElement HomeElement = driver.findElement(By.xpath("//*[@id=\"theatrical\"]/div"));
		Assert.assertEquals(true, HomeElement.isDisplayed());
	    System.out.println("Theatrical Releases Card is visible");
	}

	@Then("^Social Card is visible$")
	public void social_Card_is_visible() {
		WebElement HomeElement = driver.findElement(By.xpath("//*[@id=\"social\"]/div"));
		Assert.assertEquals(true, HomeElement.isDisplayed());
	    System.out.println("Social Card is visible");
	}

	@Then("^Creative Explorer Card is visible$")
	public void creative_Explorer_Card_is_visible() {
		WebElement HomeElement = driver.findElement(By.xpath("//*[@id=\"7GvlkfOiFupy44CiETA8dw\"]/div"));
		Assert.assertEquals(true, HomeElement.isDisplayed());
	    System.out.println("Creative Explorer Card is visible");
	}

	@Then("^National TV Ad Intelligence Card is visible$")
	public void national_TV_Ad_Intelligence_Card_is_visible() {
		WebElement HomeElement = driver.findElement(By.xpath("//*[@id=\"nationalTvAdIntelligence\"]/div"));
		Assert.assertEquals(true, HomeElement.isDisplayed());
	    System.out.println("National TV Ad Intelligence Card is visible");
	}

	@Then("^Cross-Platform Ad-Intelligence Card is visible$")
	public void cross_Platform_Ad_Intelligence_Card_is_visible() {
		WebElement HomeElement = driver.findElement(By.xpath("//*[@id=\"crossPlatformAdIntelligence\"]/div"));
		Assert.assertEquals(true, HomeElement.isDisplayed());
	    System.out.println("Cross-Platform Ad Intelligence Card is visible");
	}

	@Then("^National TV eCPM Card is visible$")
	public void national_TV_eCPM_Card_is_visible() {
		WebElement HomeElement = driver.findElement(By.xpath("//*[@id=\"ecpm\"]/div"));
		Assert.assertEquals(true, HomeElement.isDisplayed());
	    System.out.println("National TV eCPM Card is visible");

	}
	
	
	///////Check all the charts are loading properly in Television by Brand - Summary Metrics \\\\\\\\\\
	
	@When("^user click on Television by Brand card$")
	public void user_click_on_Television_by_Brand_card() {
		driver.findElement(By.xpath("/html/body/div/div[2]/div/div/div[2]/div[2]/div/a[1]/div")).click();
	    System.out.println("User clicked on Television by Brand Card");
	}

	@And("^user directs to the Summary Metrics chart$")
	public void user_directs_to_the_Summary_Metrics_chart() {
		WebElement HomeElement = driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div/div[1]/div[1]/span"));
		Assert.assertEquals(true, HomeElement.isDisplayed());
		WebDriverWait wait = new WebDriverWait(driver,30);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div/div[4]/div[1]/span")));
	    System.out.println("Summary Metrics Chart is successfully loaded");
	}

	@Then("^chart gets loaded and Number of Programs is visible$")
	public void chart_gets_loaded_and_Number_of_Programs_is_visible() {
		WebDriverWait wait = new WebDriverWait(driver,30);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div/div[4]/div[1]/span")));
	   System.out.println("Number of Programs vertical stacked bar is visible");
	}


	@Then("^take screenshot of the chart$")
	public void take_screenshot_of_the_chart() {
	    System.out.println("Screenshot of Relative Exposure Summary Chart is taken");
	}
	
	
	//////////Check Chart loaded properly in Television by Brand - Share of Voice\\\\\\\\\\
	
	@When("^user click on Share of Voice sidemenu option")
	public void user_click_on_Share_of_Voice_sidemenu_option() {
	    driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[1]/div[2]/div/div[1]/div[2]/div/div/div[1]/div[3]/a/p")).click();
	}

	@And("^user directs to Share of Voice chart")
	public void user_directs_to_Share_of_Voice_chart() {
		WebDriverWait wait = new WebDriverWait(driver,30);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div/div[4]/span")));
	    
	}
   
	@Then("^chart gets loaded and EMV data is visible")
	public void chart_gets_loaded_and_EMV_data_is_visible() {
		WebDriverWait wait = new WebDriverWait(driver,30);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div/div[4]/span")));
	}
	
	////////////Check chart loaded properly in Television - By Brand - Exposure trends\\\\\\\\\\\
	
	@When("^user click on Exposure Trends sidemenu option")
	public void user_click_on_Exposure_Trends_sidemenu_option() {
		driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[1]/div[2]/div/div[1]/div[2]/div/div/div[1]/div[4]/a/p")).click();
	}

}
