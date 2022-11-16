package StepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class StreamingOriginals extends CommonUtilities {
	

	///Verify that charts in Streaming Summary Insights are loading properly////
	
	@When("^user click on Streaming Originals card")
	public void user_click_on_Streaming_Originals_card() throws InterruptedException {
		CommonUtilities.Home();
		driver.findElement(By.xpath("//*[@id=\"streaming\"]/div")).click();
		Thread.sleep(120000);
	}
	
	@Then("^user navigated to Streaming Originals screen")
	public void user_navigated_to_Streaming_Originals_screen() {
		WebDriverWait wait = new WebDriverWait(driver,40);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div[1]/div[1]/div[1]/span")));
	}
	
	@Then("^Brand level insights chart gets loaded")
	public void Brand_level_insights_chart_gets_loaded() {
		WebDriverWait wait = new WebDriverWait(driver,40);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div[1]/div[4]")));

	}
	
	@And("^take screenshot of Brand Level Insights chart")
	public void take_screenshot_of_Brand_Level_Insights_chart() {
		CommonUtilities.Screenshot("Streaming Originals", "Brand Level Insights");
	}
	
	@Then("^Relative Exposure Summary chart gets loaded")
	public void Relative_Exposure_Summary_chart_gets_loaded() {
		WebDriverWait wait = new WebDriverWait(driver,40);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div[2]/div[4]/div[1]/span")));
	}
	
	@And("^take screenshot of Relative Exposure Summary chart")
	public void take_screenshot_of_Relative_Exposure_Summary_chart() {
		JavascriptExecutor js = (JavascriptExecutor) driver;
		WebElement Element = driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div[2]/div[4]/div[1]/span"));
		js.executeScript("arguments[0].scrollIntoView();", Element);
		CommonUtilities.Screenshot("Streaming Originals", "Relative Exposure Summary");
	}
	
	////Verify that charts in Streaming Brand Deep Dive are loading properly////
	
	@When("^user click on Brand Deep Dive sidemenu option")
	public void user_click_on_Brand_Deep_Dive_sidemenu_option() throws InterruptedException {
		driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[1]/div[2]/div/div[1]/div[2]/div/div/div[1]/div[4]/a/p")).click();
		Thread.sleep(120000);
	}
	
	@Then("^Brand Deep Dive chart gets loaded")
	public void Brand_Deep_Dive_chart_gets_loaded() {
		WebDriverWait wait = new WebDriverWait(driver,40);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div/div[3]/div[1]/table/thead/tr/th[1]")));
	}
	
	@And("^take screenshot of Brand Deep Dive chart")
	public void take_screenshot_of_Brand_Deep_Dive_chart() {
		CommonUtilities.Screenshot("Streaming Originals", "Brand Deep Dive");
	}

	////Verify that charts in Platform-Wide Insight are loading properly////
	
	@When("^user click on Platform Wide Insight sidemenu option")
	public void user_click_on_Platform_Wide_Insight_sidemenu_option() throws InterruptedException {
		driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[1]/div[2]/div/div[1]/div[2]/div/div/div[1]/div[6]/a/p")).click();
		Thread.sleep(120000);
	}
	
	@Then("^Platform Incidence chart gets loaded")
	public void Platform_Incidence_chart_gets_loaded() {
		WebDriverWait wait = new WebDriverWait(driver,40);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div[1]/div[3]/div[1]/span")));
	}
	
	@And("^take screenshot of Platform Incidence chart")
	public void take_screenshot_of_Platform_Incidence_chart() {
		CommonUtilities.Screenshot("Streaming Originals", "Platform Incident");
	}
	
	@Then("^Distribution of Segmentation by Platform chart gets loaded")
	public void Distribution_of_Segmentation_by_Platform_chart_gets_loaded() {
		JavascriptExecutor js = (JavascriptExecutor) driver;
		WebElement Element = driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div[2]/div[4]/span"));
		js.executeScript("arguments[0].scrollIntoView();", Element);
		WebDriverWait wait = new WebDriverWait(driver,40);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div[2]/div[6]/div[1]/table/thead/tr/th[2]")));
	}
	
	@And("^take screenshot of Distribution of Segmentation by Platform chart")
	public void take_screenshot_of_Distribution_of_Segmentation_by_Platform_chart() {
		CommonUtilities.Screenshot("Streaming Originals", "Distribution of Segmentation by Platform");
	}
	
	@Then("^Production Company Insight chart gets loaded")
	public void Production_Company_Insight_chart_gets_loaded() {
		JavascriptExecutor js = (JavascriptExecutor) driver;
		WebElement Element = driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div[3]/div[3]/div/span"));
		js.executeScript("arguments[0].scrollIntoView();", Element);
		WebDriverWait wait = new WebDriverWait(driver,40);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div[3]/div[3]/div/span")));
	}
	
	@And("^take screenshot of Production Company Insight chart")
	public void take_screenshot_of_Production_Company_Insight_chart() {
		CommonUtilities.Screenshot("Streaming Originals", "Production Company Insight");
	}
	


}
