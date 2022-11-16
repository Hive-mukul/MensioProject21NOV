package StepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;

import io.cucumber.java.en.When;

public class NBCU extends CommonUtilities {

	//////Verify that NBCU Visual By Brand chart loads properly///////////
	
	@When("^user click on NBCU card$")
	public void user_click_on_NBCU_card() throws InterruptedException {
		CommonUtilities.Home();
		driver.findElement(By.xpath("//*[@id=\"nbcu\"]/div")).click();
		driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[1]/div[2]/div/div[1]/div[2]/div/div/div[1]/div[4]")).click();
		Thread.sleep(60000);
		driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div/div[3]/div[1]/div[1]/div/div/div")).click();
		driver.findElement(By.id("react-select-8-input")).sendKeys("Ford");
		driver.findElement(By.id("react-select-8-input")).sendKeys(Keys.ENTER);
		
	}
	
	@Then("^user choose brand$")
	public void user_choose_brand ()
}
