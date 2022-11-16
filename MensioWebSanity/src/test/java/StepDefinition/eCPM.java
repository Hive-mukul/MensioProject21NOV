package StepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import junit.framework.Assert;

public class eCPM extends CommonUtilities{
	
////Verify that all charts in National TV eCPM market benchmark are loading properly/////
	
	@When("^user click on National TV eCPM card")
	public void user_click_on_National_TV_eCPM_card() throws InterruptedException {
		CommonUtilities.Home();
		driver.findElement(By.xpath("//*[@id=\"ecpm\"]/div")).click();
		Thread.sleep(120000);
	}
	
	@Then("^user navigated to National TV eCPM screen")
	public void user_navigated_to_National_TV_eCPM_screen() throws InterruptedException {
		WebElement HomeElement = driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[1]/div[2]/div/div[1]/div[2]/div/div/div[1]/div[1]"));
		Assert.assertEquals(true, HomeElement.isDisplayed());
		Thread.sleep(65000);
	}
	
	@Then("^eCPM by Network Type chart gets loaded")
	public void eCPM_by_Network_Type_chart_gets_loaded() {
		WebElement HomeElement = driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div[1]/div[4]"));
		Assert.assertEquals(true, HomeElement.isDisplayed());
	}
	
	@And("^user take screenshot of eCPM by Network Type chart")
	public void user_take_screenshot_of_eCPM_by_Network_Type_chart() {
		CommonUtilities.Screenshot("eCPM", "eCPM by Network Type");
	}
	
	@Then("^scroll to eCPM Trends by Network Type")
	public void scroll_to_eCPM_Trends_by_Network_Type() {
		JavascriptExecutor js = (JavascriptExecutor) driver;
		WebElement Element = driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div[2]/div[4]"));
		js.executeScript("arguments[0].scrollIntoView();", Element);
	}
	
	@Then("^eCPM Trends by Network Type chart gets loaded")
	public void eCPM_Trends_by_Network_Type_chart_gets_loaded() {
		WebElement HomeElement = driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div[2]/div[5]/div[1]/div/div[2]"));
		Assert.assertEquals(true, HomeElement.isDisplayed());
	}
	
	@And("^take screenshot of eCPM Trends by Network Type")
	public void take_screenshot_of_eCPM_Trends_by_Network_Type() {
		CommonUtilities.Screenshot("eCPM", "eCPM Trends by Network Type");
	}
	
	@Then("^scroll to eCPM YoY Trends by Network Type")
	public void scroll_to_eCPM_YoY_Trends_by_Network_Type() {
		JavascriptExecutor js = (JavascriptExecutor) driver;
		WebElement Element = driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div[3]/div[4]"));
		js.executeScript("arguments[0].scrollIntoView();", Element);
	}
	
	@Then("^eCPM YoY Trends by Network Type chart gets loaded")
	public void eCPM_YoY_Trends_by_Network_Type_chart_gets_loaded() {
		WebElement HomeElement = driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div[3]/div[5]/div/div[1]"));
		Assert.assertEquals(true, HomeElement.isDisplayed());
	}
	
	@And("^take screenshot of eCPM YoY Trends by Network Type chart")
	public void take_screenshot_of_eCPM_YoY_Trends_by_Network_Type_chart() {
		CommonUtilities.Screenshot("eCPM", "eCPM YoY Trends by Network Type");
	}
	
	@Then("^scroll to eCPM Percentage Change by Network Type")
	public void scroll_to_eCPM_Percentage_Change_by_Network_Type() {
		JavascriptExecutor js = (JavascriptExecutor) driver;
		WebElement Element = driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div[4]/span"));
		js.executeScript("arguments[0].scrollIntoView();", Element);
	}
	
	@Then("^eCPM Percentage Change by Network Type chart gets loaded")
	public void eCPM_Percentage_Change_by_Network_Type_chart_gets_loaded() {
		WebElement HomeElement = driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div[4]/div[4]/div"));
		Assert.assertEquals(true, HomeElement.isDisplayed());
	}
	
	@And("^take screenshot of eCPM Percentage Change by Network Type chart")
	public void take_screenshot_of_eCPM_Percentage_Change_by_Network_Type_chart() {
		CommonUtilities.Screenshot("eCPM", "eCPM Percentage Change by Network Type");
	}
	
	//////////Verify that all charts in National TV eCPM Network Benchmark are loading properly///////////
	
	@When("^user click on Network Benchmark sidemenu option")
	public void user_click_on_Network_Benchmark_sidemenu_option() throws InterruptedException {
		driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[1]/div[2]/div/div[1]/div[2]/div/div/div[1]/div[3]/a/p")).click();
		Thread.sleep(120000);
	}
	
	@Then("^eCPM by Network chart gets loaded")
	public void eCPM_by_Network_chart_gets_loaded() {
		JavascriptExecutor js = (JavascriptExecutor) driver;
		WebElement Element = driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div[1]/div[4]/div[1]/table/thead/tr/th[1]"));
		js.executeScript("arguments[0].scrollIntoView();", Element);
		WebElement HomeElement = driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div[1]/div[4]/div[1]/table/thead/tr/th[2]"));
		Assert.assertEquals(true, HomeElement.isDisplayed());
	}
	
	@And("^take screenshot of eCPM by Network")
	public void take_screenshot_of_eCPM_by_Network() {
		CommonUtilities.Screenshot("eCPM", "eCPM by Network");
	}
	
	@Then("^scroll down to eCPM by Network and Daypart")
	public void scroll_down_to_eCPM_by_Network_and_Daypart() {
		JavascriptExecutor js = (JavascriptExecutor) driver;
		WebElement Element = driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div[2]/div[3]"));
		js.executeScript("arguments[0].scrollIntoView();", Element);
	}
	
	@Then("^eCPM by Network and Daypart chart gets loaded")
	public void eCPM_by_Network_and_Daypart_chart_gets_loaded() {
		WebElement HomeElement = driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div[2]/div[4]/div[1]/table/thead/tr/th[3]"));
		Assert.assertEquals(true, HomeElement.isDisplayed());
	}
	
	@And("^take screenshot of eCPM by Network and Daypart chart")
	public void take_screenshot_of_eCPM_by_Network_and_Daypart_chart() {
		CommonUtilities.Screenshot("eCPM", "eCPM by Network and Daypart");
	}
	
	@Then("^scroll down to eCPM by Network and Genre")
	public void scroll_down_to_eCPM_by_Network_and_Genre() {
		JavascriptExecutor js = (JavascriptExecutor) driver;
		WebElement Element = driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div[3]/div[3]"));
		js.executeScript("arguments[0].scrollIntoView();", Element);
	}
	
	@Then("^eCPM by Network and Genre chart gets loaded")
	public void eCPM_by_Network_and_Genre_chart_gets_loaded() {
		WebElement HomeElement = driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div[3]/div[4]/div[1]/table/thead/tr/th[2]"));
		Assert.assertEquals(true, HomeElement.isDisplayed());
	}
	
	@And("^take screenshot of eCPM by Network and Genre chart")
	public void take_screenshot_of_eCPM_by_Network_and_Genre_chart() {
		CommonUtilities.Screenshot("eCPM", "eCPM by Network and Genre");
	}
	
	///////////Verify that all charts in National TV eCPM Audience Benchmark are loading properly/////////////
	
	@When("^user click on Audience Benchmark sidemenu option")
	public void user_click_on_Audience_Benchmark_sidemenu_option() throws InterruptedException {
		driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[1]/div[2]/div/div[1]/div[2]/div/div/div[1]/div[5]/a/p")).click();
		Thread.sleep(120000);
	}
	
	@Then("^Network eCPM vs Audience Index chart gets loaded")
	public void Network_eCPM_vs_Audience_Index_chart_gets_loaded() {
		WebElement HomeElement = driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div[1]/div[3]/div/div[1]/div[1]"));
		Assert.assertEquals(true, HomeElement.isDisplayed());
	}
	
	@And("^take screenshot of Network eCPM vs Audience Index chart")
	public void take_screenshot_of_Network_eCPM_vs_Audience_Index_chart() {
		CommonUtilities.Screenshot("eCPM", "Network eCPM vs Audience Index chart");
	}
	
	@Then("^scroll down to eCPM by Network and Audience")
	public void scroll_down_to_eCPM_by_Network_and_Audience() {
		JavascriptExecutor js = (JavascriptExecutor) driver;
		WebElement Element = driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div[2]/div[3]"));
		js.executeScript("arguments[0].scrollIntoView();", Element);
	}
	
	@Then("^eCPM by Network and Audience chart gets loaded")
	public void eCPM_by_Network_and_Audience_chart_gets_loaded() {
		WebElement HomeElement = driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div[2]/div[4]/div[1]/table/thead/tr/th[2]"));
		Assert.assertEquals(true, HomeElement.isDisplayed());
	}
	
	@And("^take screenshot of eCPM by Network and Audience chart")
	public void take_screenshot_of_eCPM_by_Network_and_Audience_chart() {
		CommonUtilities.Screenshot("eCPM", "eCPM by Network and Audience");
	}
	
	//////Verify that all charts in National TV eCPM Audience Efficiency are loading properly//////////
	
	@When("^user click on Audience Efficiency sidemenu option")
	public void user_click_on_Audience_Efficiency_sidemenu_option() throws InterruptedException {
		driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[1]/div[2]/div/div[1]/div[2]/div/div/div[1]/div[6]/a/p")).click();
		Thread.sleep(120000);
	}
	
	@Then("^Audience Index by Network chart gets loaded")
	public void Audience_Index_by_Network_chart_gets_loaded() {
		WebElement HomeElement = driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div[1]/div[3]/div[1]/table/thead/tr/th[3]"));
		Assert.assertEquals(true, HomeElement.isDisplayed());
	}
	
	@And("^take screenshot of Audience Index by Network chart")
	public void take_screenshot_of_Audience_Index_by_Network_chart() {
		CommonUtilities.Screenshot("eCPM", "Audience Index by Network");
	}
	
	

}
