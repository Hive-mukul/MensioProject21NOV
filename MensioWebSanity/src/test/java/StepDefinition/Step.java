package StepDefinition;

import java.util.concurrent.TimeUnit;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
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
//		driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div/form/div[1]/div/input")).sendKeys("manusingh@thehive.ai");
//		driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div/form/div[2]/div/input")).sendKeys("Macmohan39");
		System.out.println("User entered valid email and password");
	}

	@And("^user click on login button$")
	public void user_click_on_login_button() {
		driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div/form/div[4]")).click();

		System.out.println("User clicked on Login button");
	}

	@Then("^user is navigated to home screen$")
	public void user_is_navigated_to_home_screen() {
		WebElement HomeElement = driver.findElement(By.xpath("//*[@id=\"home-main-scrollable-container\"]/div[1]/div/span"));
		Assert.assertEquals(true, HomeElement.isDisplayed());
		//driver.findElement(By.className("jss121")).click();
		System.out.println("User navigated to home screen");
	}
	
	@And("^take screenshot$")
	public void take_screenshot() {
		WebDriverWait wait = new WebDriverWait(driver,10);
		CommonUtilities.Screenshot("Login", "login");
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


	@And("^take screenshot of the Summary Metrics chart$")
	public void take_screenshot_of_the_Summary_Metrics_chart() {
	    CommonUtilities.Screenshot("TelevisionByBrand","Summary Metrics");
	}
	
	
	//////////Check Chart loaded properly in Television by Brand - Share of Voice\\\\\\\\\\
	
	@When("^user click on Share of Voice sidemenu option")
	public void user_click_on_Share_of_Voice_sidemenu_option() throws InterruptedException {
	    Thread.sleep(2000);
	    driver.findElement(By.xpath("/html/body/div/div[2]/div/div/div[1]/div[2]/div/div[1]/div[2]/div/div/div[1]/div[5]/a/p")).click();
	}
   
	@Then("^chart gets loaded and EMV data is visible")
	public void chart_gets_loaded_and_EMV_data_is_visible() {
		WebDriverWait wait = new WebDriverWait(driver,30);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"contents-container\"]/div/div[1]/div[2]/div/div[1]/div[2]/div/div/div[1]/div[5]/a/p")));
	}
	
	@And("^take screenshot of the Share of Voice chart")
	public void take_screenshot_of_the_Share_of_Voice_chart() {
		CommonUtilities.Screenshot("TelevisionByBrand","Share of Voice");
	}
	
	////////////Check chart loaded properly in Television - By Brand - Exposure trends\\\\\\\\\\\
	
	@When("^user click on Exposure Trends sidemenu option")
	public void user_click_on_Exposure_Trends_sidemenu_option() {
		driver.findElement(By.xpath("/html/body/div/div[2]/div/div/div[1]/div[2]/div/div[1]/div[2]/div/div/div[1]/div[4]/a/p")).click();
	}
	
	@And("^chart gets loaded and EMV is visible")
	public void chart_gets_loaded_and_EMV_is_visible() {
		WebDriverWait wait = new WebDriverWait(driver,30);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div/div[3]/span")));
	}
	
	@And("^take screenshot of the Exposure Trends charts")
	public void take_screenshot_of_the_Exposure_Trends_charts() {
		CommonUtilities.Screenshot("TelevisionByBrand","Exposure Trends");
	}
	
	//////Verify that Visual Exposure - By Brand chart is loading properly//////
	
	@When("^user click on By Brand sidemenu option")
	public void user_click_on_By_Brand_sidemenu_option() {
		driver.findElement(By.xpath("/html/body/div/div[2]/div/div/div[1]/div[2]/div/div[1]/div[2]/div/div/div[1]/div[6]/a/p")).click();
	}
    
	@Then("^By Brand data gets loaded and table is visible")
	public void By_Brand_data_gets_loaded_and_table_is_visible() {
		WebDriverWait wait = new WebDriverWait(driver,60);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("/html/body/div/div[2]/div/div/div[2]/div/div[5]/span")));
	}
	
	@And("^take screenshot of By brand chart")
	public void take_screenshot_of_By_brand_chart() {
		CommonUtilities.Screenshot("TelevisionByBrand", "ByBrand");
	}
	
	////Verify that Visual Exposure - By Brand & Asset Type chart is loading properly\\\\\\\\\\\
	
	@When("^user click on By Brand Asset Type sidemenu option")
	public void user_click_on_By_Brand_Asset_Type_sidemenu_option() {
		driver.findElement(By.xpath("/html/body/div/div[2]/div/div/div[1]/div[2]/div/div[1]/div[2]/div/div/div[1]/div[7]/a/p")).click();
	}
	
	@Then("^By Brand Asset Type data gets loaded and table is visible")
	public void By_Brand_Asset_Type_data_gets_loaded_and_table_is_visible() {
		WebDriverWait wait = new WebDriverWait(driver,120);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("/html/body/div/div[2]/div/div/div[2]/div/div[3]/div/div[1]/table/thead/tr/th[5]")));
	}
	
	@And("^take screenshot of By Brand Asset type chart")
	public void take_screenshot_of_By_Brand_Asset_type_chart() {
		CommonUtilities.Screenshot("TelevisionByBrand", "ByBrandAssetType");
	}
	
	/////Verify that Visual Exposure - By Program chart is loading properly\\\\\\\\\\\\\\\
	
	@When("^user click on By Program sidemenu option")
	public void user_click_on_By_Program_sidemenu_option() throws InterruptedException {
		driver.findElement(By.xpath("/html/body/div/div[2]/div/div/div[1]/div[2]/div/div[1]/div[2]/div/div/div[1]/div[8]/a/p")).click();
		Thread.sleep(6000);
	}
	
	@Then("^user click on Submit after choosing program and episode")
	public void user_click_on_Submit_after_choosing_program_and_episode() {
		//WebDriverWait wait = new WebDriverWait(driver,20);
		//wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id='contents-container']/div/div[2]/div/div[2]/div[2]/div[2]/div/div/div")));
		driver.findElement(By.xpath("//*[@id='contents-container']/div/div[2]/div/div[2]/div[2]/div[2]/div/div/div")).click();
		WebElement we = driver.findElement(By.tagName("+ noche"));
		we.click();
	}
		
///////Verify that Verbal Exposure - By Brand chart is loading properly////////
		
	@When("^user click on Verbal Exposure By Brand sidemenu option")
	public void user_click_on_Verbal_Exposure_By_Brand_sidemenu_option() {
		driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[1]/div[2]/div/div[1]/div[2]/div/div/div[1]/div[11]/a/p")).click();
	}
	
	@Then("^Verbal Exposure by program data gets loaded and table in visible")
	public void Verbal_Exposure_by_program_data_gets_loaded_and_table_in_visible() {
		WebDriverWait wait = new WebDriverWait(driver,40);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div/div[4]/div[1]/table/thead/tr/th[9]")));
	}
	
	@And("^take screenshot of Verbal Exposure by Brand chart") 
	public void take_screenshot_of_Verbal_Exposure_by_Brand_chart() {
		CommonUtilities.Screenshot("TelevisionByBrand", "VerbalExposure-ByBrand");
	}

	////Verify that By Brand and team chart is loading properly//////
	
	@When("^user click on Television by team card") 
		public void user_click_on_Television_by_team_card() {
		CommonUtilities.Home();
		driver.findElement(By.xpath("//*[@id=\"teamSponsorship\"]/div")).click();
		WebDriverWait wait = new WebDriverWait(driver,40);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"contents-container\"]/div/div[1]/div[2]/div/div[1]/div[2]/div/div/div[1]/span[1]")));
	}
	
	@Then("^user navigate to By Brand and team chart")
	public void user_navigate_to_By_Brand_and_team_chart() {
		WebDriverWait wait = new WebDriverWait(driver,40);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div/div[4]/div[1]/table/thead/tr/th[5]")));
	}
	
	@And("^take screenshot of By Brand and team chart")
	public void take_screenshot_of_By_Brand_and_team_chart() {
		CommonUtilities.Screenshot("TelevisionByTeam", "ByBrandTeam");
	}
	
  /////Verify that By Brand Team Asset Type chart is loading properly/////
	
	@When("^user click on By Brand team asset type side menu option") 
	public void user_click_on_By_Brand_team_asset_type_side_menu_option() {
		driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[1]/div[2]/div/div[1]/div[2]/div/div/div[1]/div[3]/a/p")).click();
	}
	
	@Then("^By Brand team asset type chart get loaded")
	public void By_Brand_team_asset_type_chart_get_loaded() {
		WebDriverWait wait = new WebDriverWait(driver,40);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div/div[3]/div/div[1]/table/thead/tr/th[1]")));
	}
	
	@And("^take screenshot of By brand team asset type chart")
	public void take_screenshot_of_By_brand_team_asset_type_chart() {
		CommonUtilities.Screenshot("TelevisionByTeam", "ByBrandTeamAssetType");
	}
	
	//////Verify that Verbal By Brand and Team chart is loading properly/////
	@When("^user click on By Brand and Team sidemenu option")
	public void user_click_on_By_Brand_and_Team_sidemenu_option() {
		driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[1]/div[2]/div/div[1]/div[2]/div/div/div[1]/div[7]/a/p")).click();
	}
	
	@Then("^By Brand and Team chart gets loaded") 
	public void By_Brand_and_Team_chart_gets_loaded() {
		WebDriverWait wait = new WebDriverWait(driver,40);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div/div[4]/div[1]/table/thead/tr/th[3]")));
	}
	
	@And("^take screenshot of Verbal By Brand and Team chart")
	public void take_screenshot_of_Verbal_By_Brand_and_Team_chart() {
		CommonUtilities.Screenshot("TelevisionByTeam", "VerbalByBrandandTeam");
	}
	
	//////Verify that Team Summary Beta chart is loading properly/////
	
	@When("^user click on Television Team as Brands card")
	public void user_click_on_Television_Team_as_Brands_card() {
		CommonUtilities.Home();
		driver.findElement(By.xpath("//*[@id=\"teamExposure\"]/div")).click();
	}
	
	@Then("^user navigated to Television Team as Brand screen")
	public void user_navigated_to_Television_Team_as_Brand_screen() {
		WebDriverWait wait = new WebDriverWait(driver,40);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div[1]/div[1]/div[1]/span")));
	}
	
	@Then("^Team Summary Beta chart gets loaded")
	public void Team_Summary_Beta_chart_gets_loaded() {
		WebDriverWait wait = new WebDriverWait(driver,40);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div[1]/div[4]/div/div[1]/div[1]/div")));
	}
	
	@And("^take screenshot of Team Summary Beta")
	public void take_screenshot_of_Team_Summary_Beta() {
		CommonUtilities.Screenshot("Television - Team as Brands", "Team Value Summary");
	}
	
	@Then("^Team Value Mix chart is loaded")
	public void Team_Value_Mix_chart_is_loaded() {
		JavascriptExecutor js = (JavascriptExecutor) driver;
		WebElement Element = driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div[2]/div[5]/div/div[3]/div[2]/div[1]"));
		js.executeScript("arguments[0].scrollIntoView();", Element);
		WebDriverWait wait = new WebDriverWait(driver,40);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div[2]/div[5]/div")));
	}
	
	@And("^take screenshot of Team Value Mix chart")
	public void take_screenshot_of_Team_Value_Mix_chart() {
		CommonUtilities.Screenshot("Television - Team as Brands", "Team Value Mix");
	}
	
	////Verify that League Summary Beta chart is loading properly//////
	
	@When("^user click on League Summary Beta Sidemenu option")
	public void user_click_on_League_Summary_Beta_Sidemenu_option() {
		driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[1]/div[2]/div/div[1]/div[2]/div/div/div[1]/div[3]/a/p")).click();
	}
	
	@Then("^League Summary Beta chart gets loaded")
	public void League_Summary_Beta_chart_gets_loaded() {
		WebDriverWait wait = new WebDriverWait(driver,40);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div/div[5]/div[1]/table/thead/tr/th[1]")));
	}
	
	@And("^take screenshot of League Summary Beta")
	public void take_screenshot_of_League_Summary_Beta() {
		CommonUtilities.Screenshot("Television - Team as Brands", "League Value Mix");
	}
	
	/////Verify that Team Deep Dive Chart is loading properly/////
	
	@When("^user click on Team Deep Dive sidemenu option")
	public void user_click_on_Team_Deep_Dive_sidemenu_option() {
		driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[1]/div[2]/div/div[1]/div[2]/div/div/div[1]/div[4]/a/p")).click();
	}
	
	@Then("^Team Deep Dive chart gets loaded")
	public void Team_Deep_Dive_chart_gets_loaded() {
		WebDriverWait wait = new WebDriverWait(driver,40);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div/div[4]/div[1]/table/thead/tr/th[3]")));
	}
	
	@And("^take screenshot of Team Deep Dive Chart")
	public void take_screenshot_of_Team_Deep_Dive_Chart() {
		CommonUtilities.Screenshot("Television - Team as Brands", "Team Deep Dive");
	}
}