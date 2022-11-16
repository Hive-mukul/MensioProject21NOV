package StepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class Theatrical extends CommonUtilities {
	
//////Verify that charts in Summary Insights are loading properly/////
	
	@When("^user click on Theatrical Releases card")
	public void user_click_on_Theatrical_Releases_card() throws InterruptedException {
		CommonUtilities.Home();
		driver.findElement(By.xpath("//*[@id=\"theatrical\"]/div")).click();
		Thread.sleep(120000);
	}
	
	@Then("^user navigated to Theatrical Releases screen")
	public void user_navigated_to_Theatrical_Releases_screen() {
		WebDriverWait wait = new WebDriverWait(driver,40);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div[1]/div[1]/div[1]/span")));
	}
	
	@Then("^Theatrical Brand Level Insights chart gets loaded")
	public void Theatrical_Brand_Level_Insights_chart_gets_loaded() {
		WebDriverWait wait = new WebDriverWait(driver,40);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div[1]/div[4]/span")));
	}
	
	@And("^take screenshot of Theatrical Brand Level Insights chart")
	public void take_screenshot_of_Theatrical_Brand_Level_Insights_chart() {
		CommonUtilities.Screenshot("Theatrical", "Brand Level Insights");
	}
	
	@Then("^TH Relative Exposure Summary chart gets loaded")
	public void TH_Relative_Exposure_Summary_chart_gets_loaded() {
		WebDriverWait wait = new WebDriverWait(driver,40);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div[2]/div[4]/div[2]/span")));
	}
	
	@And("^take screenshot of TH Relative Exposure Summary chart")
	public void take_screenshot_of_TH_Relative_Exposure_Summary_chart() {
		CommonUtilities.Screenshot("Theatrical", "Relative Exposure Summary");
	}
	
	////Verify that charts in Brand Deep Dive are loading properly////
	
	@When("^user click on TH Brand Deep Dive sidemenu option")
	public void user_click_on_TH_Brand_Deep_Dive_sidemenu_option() throws InterruptedException {
		driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[1]/div[2]/div/div[1]/div[2]/div/div/div[1]/div[3]/a/p")).click();
		Thread.sleep(120000);
	}
	
	@Then("^TH Brand Summary chart gets loaded")
	public void TH_Brand_Summary_chart_gets_loaded() {
		WebDriverWait wait = new WebDriverWait(driver,40);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div/div[3]/div[1]/table/thead/tr/th[1]")));
	}
	
	//////Verify that charts in Theatrical Insights are loading properly/////
	
	@When("^user click on Theatrical Insights sidemenu option")
	public void user_click_on_Theatrical_Insights_sidemenu_option() throws InterruptedException {
		driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[1]/div[2]/div/div[1]/div[2]/div/div/div[1]/div[6]/a/p")).click();
		Thread.sleep(120000);
	}
	
	@Then("^Genre Incidence chart gets loaded")
	public void Genre_Incidence_chart_gets_loaded() {
		WebDriverWait wait = new WebDriverWait(driver,40);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div[1]/div[3]/div[1]/span")));
	}
	
	@And("^take screenshot of Genre Incidence chart")
	public void take_screenshot_of_Genre_Incidence_chart() {
		CommonUtilities.Screenshot("Theatrical", "Genre Incidence");
	}
	
	@Then("^Distribution of Segmentation by Genre Chart gets loaded")
	public void Distribution_of_Segmentation_by_Genre_Chart_gets_loaded() {
		JavascriptExecutor js = (JavascriptExecutor) driver;
		WebElement Element = driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div[2]/div[5]/div/div[2]/div"));
		js.executeScript("arguments[0].scrollIntoView();", Element);
		WebDriverWait wait = new WebDriverWait(driver,40);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div[2]/div[4]/span")));
	}
	
	@And("^take screenshot of Distribution of Segmentation by Genre chart")
	public void take_screenshot_of_Distribution_of_Segmentation_by_Genre_chart() {
		CommonUtilities.Screenshot("Theatrical", "Distribution of Segmentation by Genre");
	}
	
	@Then("^Production Company Insights chart gets loaded")
	public void Production_Company_Insights_chart_gets_loaded() {
		JavascriptExecutor js = (JavascriptExecutor) driver;
		WebElement Element = driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div[3]/div[4]/div"));
		js.executeScript("arguments[0].scrollIntoView();", Element);
		WebDriverWait wait = new WebDriverWait(driver,40);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div[3]/div[3]/div/span")));
	}
	
	@And("^take screenshot of Production Company Insights")
	public void take_screenshot_of_Production_Company_Insights() {
		CommonUtilities.Screenshot("Theatrical", "Production Company Insights");
	}
	
	

}
