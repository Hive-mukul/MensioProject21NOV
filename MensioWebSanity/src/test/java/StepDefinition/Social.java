package StepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class Social extends CommonUtilities {
	
/////Verify that charts in Social Summary Insights are loading properly//////
	
	@When("^user click on Social Card")
	public void user_click_on_Social_Card() throws InterruptedException {
		CommonUtilities.Home();
		driver.findElement(By.xpath("//*[@id=\"social\"]/div")).click();
		Thread.sleep(120000);
	}
	
	@Then("^user navigates to Social Screen")
	public void user_navigates_to_Social_Screen() {
		WebDriverWait wait = new WebDriverWait(driver,40);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div[1]/div[1]/div[1]/span")));
	}
	
	@Then("^Social Brand Level Insights chart gets loaded")
	public void Social_Brand_Level_Insights_chart_gets_loaded() {
		WebDriverWait wait = new WebDriverWait(driver,40);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div[1]/div[4]/span")));
	}
	
	@And("^take screenshot of Social Brand Level Insights chart")
	public void take_screenshot_of_Social_Brand_Level_Insights_chart() {
		CommonUtilities.Screenshot("Social", "Brand Level Insights");
	}
	
	@Then("^Sponsorship Trends chart gets loaded")
	public void Sponsorship_Trends_chart_gets_loaded() {
		JavascriptExecutor js = (JavascriptExecutor) driver;
		WebElement Element = driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div[2]/div[5]/span"));
		js.executeScript("arguments[0].scrollIntoView();", Element);
		WebDriverWait wait = new WebDriverWait(driver,40);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div[2]/div[3]/span")));
	}
	
	@And("^take screenshot of Sponsorship Trends chart")
	public void take_screenshot_of_Sponsorship_Trends_chart() {
		CommonUtilities.Screenshot("Social", "Sponsorship Trends");
	}
	
	@Then("^Social Relative Exposure Summary chart gets loaded")
	public void Social_Relative_Exposure_Summary_chart_gets_loaded() {
		JavascriptExecutor js = (JavascriptExecutor) driver;
		WebElement Element = driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div[3]/div[4]/div[2]/span"));
		js.executeScript("arguments[0].scrollIntoView();", Element);
		WebDriverWait wait = new WebDriverWait(driver,40);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div[3]/div[4]/div[1]/span")));
	}
	
	@And("^take screenshot of Social Relative Exposure Summary chart")
	public void take_screenshot_of_Social_Relative_Exposure_Summary_chart() {
		CommonUtilities.Screenshot("Social", "Relative Exposure Summary");
	}
	
	/////Verify that charts in Social Brand Deep Dive are loading properly/////
	
	@When("^user click on Social Brand Deep Dive sidemenu option")
	public void user_click_on_Social_Brand_Deep_Dive_sidemenu_option() throws InterruptedException {
		driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[1]/div[2]/div/div[1]/div[2]/div/div/div[1]/div[4]/a/p")).click();
		Thread.sleep(120000);
	}
	
	@Then("^Social Brand Deep Dive Chart gets loaded")
	public void Social_Brand_Deep_Dive_Chart_gets_loaded() {
		WebDriverWait wait = new WebDriverWait(driver,40);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div/div[3]/div[1]/table/thead/tr/th[5]")));
	}
	
	@And("^take screenshot of Brand Deep Dive Chart")
	public void take_screenshot_of_Brand_Deep_Dive_Chart() {
		CommonUtilities.Screenshot("Social", "Brand Deep Dive");
	}
	
	////Verify that charts in Social Platform Wide Insights are loading properly////
	
	@When("^user click on Social Platform Wide Insights sidemenu option")
	public void user_click_on_Social_Platform_Wide_Insights_sidemenu_option() throws InterruptedException {
		driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[1]/div[2]/div/div[1]/div[2]/div/div/div[1]/div[6]/a/p")).click();
		Thread.sleep(120000);
	}
	
	@Then("^Social Platform Wide Insights chart gets loaded")
	public void Social_Platform_Wide_Insights_chart_gets_loaded() {
		WebDriverWait wait = new WebDriverWait(driver,40);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div/div[4]/span")));
	}
	
	@And("^take screenshot of Social Platform Wide Insights chart")
	public void take_screenshot_of_Social_Platform_Wide_Insights_chart() {
		CommonUtilities.Screenshot("Social", "Platform Wide Insights");
	}
	
	

}
