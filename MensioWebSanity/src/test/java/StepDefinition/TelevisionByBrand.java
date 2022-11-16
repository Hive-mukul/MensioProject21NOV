package StepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import junit.framework.Assert;

public class TelevisionByBrand extends CommonUtilities{
	
///////Check all the charts are loading properly in Television by Brand - Summary Metrics \\\\\\\\\\
	
	@When("^user click on Television by Brand card$")
	public void user_click_on_Television_by_Brand_card() throws InterruptedException {
		driver.findElement(By.xpath("/html/body/div/div[2]/div/div/div[2]/div[2]/div/a[1]/div")).click();
	    System.out.println("User clicked on Television by Brand Card");
	    Thread.sleep(2000);
	}
	
	@Then("^user click on Summary Metrics sidemenu icon")
	public void user_click_on_Summary_Metrics_sidemenu_icon() throws InterruptedException {
		driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[1]/div[2]/div/div[1]/div[2]/div/div/div[1]/div[2]/a/p")).click();
		Thread.sleep(120000);
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
	    driver.findElement(By.xpath("/html/body/div/div[2]/div/div/div[1]/div[2]/div/div[1]/div[2]/div/div/div[1]/div[5]/a/p")).click();
	    Thread.sleep(12000);
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
	public void user_click_on_Exposure_Trends_sidemenu_option() throws InterruptedException {
		driver.findElement(By.xpath("/html/body/div/div[2]/div/div/div[1]/div[2]/div/div[1]/div[2]/div/div/div[1]/div[4]/a/p")).click();
//		Thread.sleep(120000);
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
		WebDriverWait wait = new WebDriverWait(driver,20);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id='contents-container']/div/div[2]/div/div[2]/div[2]/div[2]/div/div/div")));
		driver.findElement(By.xpath("//*[@id='contents-container']/div/div[2]/div/div[2]/div[2]/div[2]/div/div/div")).click();
		WebElement we = driver.findElement(By.xpath("//div[2]/div[2]/div[2]/div/div/div/div/div/div/div/input"));
		we.sendKeys("noche");
		we.sendKeys(Keys.RETURN);
	}
		
///////Verify that Verbal Exposure - By Brand chart is loading properly////////
		
	@When("^user click on Verbal Exposure By Brand sidemenu option")
	public void user_click_on_Verbal_Exposure_By_Brand_sidemenu_option() {
		driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[1]/div[2]/div/div[1]/div[2]/div/div/div[1]/div[11]/a/p")).click();
	}
	
	@Then("^Verbal Exposure by program data gets loaded and table in visible")
	public void Verbal_Exposure_by_program_data_gets_loaded_and_table_in_visible() {
		WebDriverWait wait = new WebDriverWait(driver,60);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div/div[4]/div[1]/table/thead/tr/th[9]")));
	}
	
	@And("^take screenshot of Verbal Exposure by Brand chart") 
	public void take_screenshot_of_Verbal_Exposure_by_Brand_chart() {
		CommonUtilities.Screenshot("TelevisionByBrand", "VerbalExposure-ByBrand");
	}


}
