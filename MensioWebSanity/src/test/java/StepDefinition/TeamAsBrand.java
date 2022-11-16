package StepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class TeamAsBrand extends CommonUtilities {
	

	//////Verify that Team Summary Beta chart is loading properly/////
	
	@When("^user click on Television Team as Brands card")
	public void user_click_on_Television_Team_as_Brands_card() {
		CommonUtilities.Home();
		driver.findElement(By.xpath("//*[@id=\"teamExposure\"]/div")).click();
	}
	
	@Then("^user navigated to Television Team as Brand screen")
	public void user_navigated_to_Television_Team_as_Brand_screen() throws InterruptedException {
		WebDriverWait wait = new WebDriverWait(driver,60);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div[1]/div[1]/div[1]/span")));
		Thread.sleep(120000);
	}
	
	@Then("^Team Summary Beta chart gets loaded")
	public void Team_Summary_Beta_chart_gets_loaded() {
		WebDriverWait wait = new WebDriverWait(driver,60);
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
		WebDriverWait wait = new WebDriverWait(driver,60);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div[2]/div[5]/div")));
	}
	
	@And("^take screenshot of Team Value Mix chart")
	public void take_screenshot_of_Team_Value_Mix_chart() {
		CommonUtilities.Screenshot("Television - Team as Brands", "Team Value Mix");
	}
	
	////Verify that League Summary Beta chart is loading properly//////
	
	@When("^user click on League Summary Beta Sidemenu option")
	public void user_click_on_League_Summary_Beta_Sidemenu_option() throws InterruptedException {
		driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[1]/div[2]/div/div[1]/div[2]/div/div/div[1]/div[3]/a/p")).click();
		Thread.sleep(120000);
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
	public void user_click_on_Team_Deep_Dive_sidemenu_option() throws InterruptedException {
		driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[1]/div[2]/div/div[1]/div[2]/div/div/div[1]/div[4]/a/p")).click();
		Thread.sleep(120000);
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
