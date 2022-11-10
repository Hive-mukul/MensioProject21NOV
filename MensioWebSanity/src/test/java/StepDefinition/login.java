package StepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.WebDriverWait;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import junit.framework.Assert;

public class login extends CommonUtilities {
	
///////////Check the login feature of Mensio Web Application\\\\\\\\\\\\\\
	
@Given("^user is on the login screen$")
public void user_is_on_the_login_screen() {
  
	CommonUtilities.Chrome();
	
}

@When("^user enter email and password$")
public void user_enter_email_and_password() {
//	driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div/form/div[1]/div/input")).sendKeys("testqa@thehive.ai");
//	driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div/form/div[2]/div/input")).sendKeys("Tester@1234");
	driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div/form/div[1]/div/input")).sendKeys("manusingh@thehive.ai");
	driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div/form/div[2]/div/input")).sendKeys("Macmohan39");
	System.out.println("User entered valid email and password");
}

@And("^user click on login button$")
public void user_click_on_login_button() {
	driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div/form/div[4]")).click();

	System.out.println("User clicked on Login button");
}

@Then("^user is navigated to home screen$")
public void user_is_navigated_to_home_screen() {
	WebElement HomeElement = driver.findElement(By.xpath("//*[@id=\"home-main-scrollable-container\"]/div[1]/div/span"));
	Assert.assertEquals(true, HomeElement.isDisplayed());
	driver.findElement(By.className("jss121")).click();
	System.out.println("User navigated to home screen");
}

@And("^take screenshot$")
public void take_screenshot() {
	WebDriverWait wait = new WebDriverWait(driver,10);
	CommonUtilities.Screenshot("Login", "login");
}


}
