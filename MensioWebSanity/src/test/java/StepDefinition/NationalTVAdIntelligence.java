package StepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class NationalTVAdIntelligence extends CommonUtilities {
	
/////Verify that National TV Ad Intelligence Summary Metrics chart is loading properly/////
	
	@When("^user click on National TV Ad Intelligence card")
	public void user_click_on_National_TV_Ad_Intelligence_card() throws InterruptedException {
		CommonUtilities.Home();
		driver.findElement(By.xpath("//*[@id=\"nationalTvAdIntelligence\"]/div")).click();
		Thread.sleep(120000);
	}
	
	@Then("^user navigates to National TV Ad Intelligence screen")
	public void user_navigates_to_National_TV_Ad_Intelligence_screen() {
		WebDriverWait wait = new WebDriverWait(driver,40);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div[1]/div[1]")));
	}
	
	@Then("^Share of voice by brand chart gets loaded")
	public void Share_of_voice_by_brand_chart_gets_loaded() {
		WebDriverWait wait = new WebDriverWait(driver,40);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div[1]/div[4]/div[1]/span")));
	}
	
	@And("^take screenshot of Share of voice by brand chart")
	public void take_screenshot_of_Share_of_voice_by_brand_chart() {
		CommonUtilities.Screenshot("National TV Ad Intelligence", "Share of Voice by Brand");
	}
	
	@Then("^Share of TV Estimated Spend by Network")
	public void Share_of_TV_Estimated_Spend_by_Network() {
		JavascriptExecutor js = (JavascriptExecutor) driver;
		WebElement Element = driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div[2]/div[3]/span"));
		js.executeScript("arguments[0].scrollIntoView();", Element);
		WebDriverWait wait = new WebDriverWait(driver,40);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div[2]/div[3]/span")));
	}
	
	@And("^take screenshot of Share of TV Estimated Spend by Network chart")
	public void take_screenshot_of_Share_of_TV_Estimated_Spend_by_Network_chart() {
		CommonUtilities.Screenshot("National TV Ad Intelligence", "Share of TV Estimated Spend by Network");
	}
	
	@Then("^Share of TV Estimated Spend by Program chart gets loaded")
	public void Share_of_TV_Estimated_Spend_by_Program_chart_gets_loaded() {
		JavascriptExecutor js = (JavascriptExecutor) driver;
		WebElement Element = driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div[3]/span"));
		js.executeScript("arguments[0].scrollIntoView();", Element);
		WebDriverWait wait = new WebDriverWait(driver,40);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div[3]/div[3]/div[1]/table/thead/tr[1]/th[3]")));
	}
	
	@And("^take screenshot of TV Estimated Spend by Program chart")
	public void take_screenshot_of_TV_Estimated_Spend_by_Program_chart() {
		CommonUtilities.Screenshot("National TV Ad Intelligence", "Share of TV Estimated Spend by Program");
	}
	
	////////Verify that National TV Ad Intelligence Delivery Trends chart is loading properly//////
	
	@When("^user click on National TV Ad Intelligence Delivery Trends sidemenu option")
	public void user_click_on_National_TV_Ad_Intelligence_Delivery_Trends_sidemenu_option() throws InterruptedException {
		driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[1]/div[2]/div/div[1]/div[2]/div/div/div[1]/div[3]/a/p")).click();
		Thread.sleep(120000);
	}
	
	@Then("^Overall Delivery Trends chart gets loaded")
	public void Overall_Delivery_Trends_chart_gets_loaded() {
		WebDriverWait wait = new WebDriverWait(driver,40);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div[2]/div[5]/div[1]/table/thead/tr/th[1]")));
	}
	
	@And("^take screenshot of Overall delivery trends chart")
	public void take_screenshot_of_Overall_delivery_trends_chart() {
		CommonUtilities.Screenshot("National TV Ad Intelligence", "Overall delivery trends");
	}
	
	@Then("^Brand Delivery by Network chart gets loaded")
	public void Brand_Delivery_by_Network_chart_gets_loaded() {
		JavascriptExecutor js = (JavascriptExecutor) driver;
		WebElement Element = driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div[2]/div[5]/div[1]/table/thead/tr/th[1]"));
		js.executeScript("arguments[0].scrollIntoView();", Element);
		WebDriverWait wait = new WebDriverWait(driver,40);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div[2]/span")));
	}
	
	@And("^take screenshot of NationalTV Ad Intelligence Brand Delivery by Network chart")
	public void take_screenshot_of_NationalTV_Ad_Intelligence_Brand_Delivery_by_Network_chart() {
		CommonUtilities.Screenshot("National TV Ad Intelligence", "Brand Delivery by Network");
	}
	
	/////Verify that National TV Ad Intelligence Mix Benchmarks chart is loading properly////////
	
	@When("^user click on Mix Benchmarks sidemenu option")
	public void user_click_on_Mix_Benchmarks_sidemenu_option() throws InterruptedException {
		driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[1]/div[2]/div/div[1]/div[2]/div/div/div[1]/div[4]/a/p")).click();
		Thread.sleep(120000);
	}
	
	@Then("^Distribution by TV Estimated Spend by Network Type chart gets loaded")
	public void Distribution_by_TV_Estimated_Spend_by_Network_Type_chart_gets_loaded() {
		WebDriverWait wait = new WebDriverWait(driver,40);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div/div[4]/span")));
	}
	
	@And("^take screenshot of TV Estimated Spend by Network Type chart")
	public void take_screenshot_of_TV_Estimated_Spend_by_Network_Type_chart() {
		JavascriptExecutor js = (JavascriptExecutor) driver;
		WebElement Element = driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div/div[5]/div/div[2]/div"));
		js.executeScript("arguments[0].scrollIntoView();", Element);
		CommonUtilities.Screenshot("National TV Ad Intelligence", "TV Estimated Spend By Network Type");
	}
	
	

}
