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
	
		//////Check all the creatives are loading properly in Creative Explorer/////////////
	
	@When("^user click on Creative Explorer button on home screen")
	public void user_click_on_Creative_Explorer_button_on_home_screen() throws InterruptedException {
		CommonUtilities.Home();
		driver.findElement(By.xpath("//*[@id=\"7GvlkfOiFupy44CiETA8dw\"]/div")).click();
		Thread.sleep(20000);
	}
	
	@Then("^discover creatives screen gets loaded")
	public void discover_creatives_screen_gets_loaded() { 
		WebElement HomeElement = driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div[3]/div[1]/div[1]/div[2]"));
		Assert.assertEquals(true, HomeElement.isDisplayed());
		
	}
	
	@Then("^user click on a Creative from the list")
	public void user_click_on_a_Creative_from_the_list() throws InterruptedException {
		driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div[3]/div[2]/div[1]/div[1]/div[3]")).click();
		Thread.sleep(10000);
	}
	
	@Then("^the video is played")
	public void the_video_is_played() {
		boolean t = driver.findElement(By.xpath("/html/body/div[2]/div[3]/div/div[2]/div[3]/div[1]/div/div[2]")).isDisplayed();
	      if (t) {
	         System.out.println("Video is played");
	      } else {
	         System.out.println("Video is not played");
	      }
	}
	
	@And("^user takes screenshot")
	public void user_takes_screenshot() {
		CommonUtilities.Screenshot("Creative Explorer", "Discover Creatives");
		driver.findElement(By.xpath("/html/body/div[2]/div[3]/div/div[1]/div")).click();
	}

}