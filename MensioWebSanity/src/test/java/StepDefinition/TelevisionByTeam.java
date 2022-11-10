package StepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class TelevisionByTeam extends CommonUtilities {
	
	////Verify that By Brand and team chart is loading properly//////
	
	@When("^user click on Television by team card") 
		public void user_click_on_Television_by_team_card() throws InterruptedException {
		CommonUtilities.Home();
		driver.findElement(By.xpath("//*[@id=\"teamSponsorship\"]/div")).click();
		WebDriverWait wait = new WebDriverWait(driver,60);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"contents-container\"]/div/div[1]/div[2]/div/div[1]/div[2]/div/div/div[1]/span[1]")));
		Thread.sleep(120000);
	}
	
	@Then("^user navigate to By Brand and team chart")
	public void user_navigate_to_By_Brand_and_team_chart() {
		WebDriverWait wait = new WebDriverWait(driver,60);
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
	public void By_Brand_team_asset_type_chart_get_loaded() throws InterruptedException {
		WebDriverWait wait = new WebDriverWait(driver,60);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div/div[3]/div/div[1]/table/thead/tr/th[1]")));
		Thread.sleep(120000);
	}
	
	@And("^take screenshot of By brand team asset type chart")
	public void take_screenshot_of_By_brand_team_asset_type_chart() {
		CommonUtilities.Screenshot("TelevisionByTeam", "ByBrandTeamAssetType");
	}
	
	//////Verify that Verbal By Brand and Team chart is loading properly/////
	@When("^user click on By Brand and Team sidemenu option")
	public void user_click_on_By_Brand_and_Team_sidemenu_option() throws InterruptedException {
		driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[1]/div[2]/div/div[1]/div[2]/div/div/div[1]/div[7]/a/p")).click();
		Thread.sleep(120000);
	}
	
	@Then("^By Brand and Team chart gets loaded") 
	public void By_Brand_and_Team_chart_gets_loaded() {
		WebDriverWait wait = new WebDriverWait(driver,60);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div/div[4]/div[1]/table/thead/tr/th[3]")));
	}
	
	@And("^take screenshot of Verbal By Brand and Team chart")
	public void take_screenshot_of_Verbal_By_Brand_and_Team_chart() {
		CommonUtilities.Screenshot("TelevisionByTeam", "VerbalByBrandandTeam");
	}

}
