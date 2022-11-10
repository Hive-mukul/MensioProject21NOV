package StepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import io.cucumber.java.en.Then;
import junit.framework.Assert;

public class Home extends CommonUtilities {
	
///////////Check all items visibility on home screen\\\\\\\\\\

@Then("^Television by Brand card is visible$")
public void Television_by_Brand_card_is_visible() { 
	WebElement HomeElement = driver.findElement(By.xpath("//*[@id=\"sponsorshipEarnedMedia\"]/div"));
	Assert.assertEquals(true, HomeElement.isDisplayed());
  System.out.println("Television by Brand card is visible");
}

@Then("^Television by Team card is visible$")
public void Television_by_Team_card_is_visible() {
	WebElement HomeElement = driver.findElement(By.xpath("//*//span[normalize-space()='Television - By Team']"));
	Assert.assertEquals(true, HomeElement.isDisplayed());
  System.out.println("Television by Team Card is visible");
}


@Then("^Television Team as Brands Card is visible$")
public void Television_Team_as_Brands_Card_is_visible() {
	WebElement HomeElement = driver.findElement(By.xpath("//*[@id=\"teamExposure\"]/div"));
	Assert.assertEquals(true, HomeElement.isDisplayed());
 System.out.println("Television Team as Brands Card is visible Card is visible");
}


@Then("^Streaming Originals Card is visible$")
public void streaming_Originals_Card_is_visible() {
	WebElement HomeElement = driver.findElement(By.xpath("//*[@id=\"streaming\"]/div"));
	Assert.assertEquals(true, HomeElement.isDisplayed());
  System.out.println("Streaming Originals Card is visible");

}

@Then("^Theatrical Releases Card is visible$")
public void theatrical_Releases_Card_is_visible() {
	WebElement HomeElement = driver.findElement(By.xpath("//*[@id=\"theatrical\"]/div"));
	Assert.assertEquals(true, HomeElement.isDisplayed());
  System.out.println("Theatrical Releases Card is visible");
}

@Then("^Social Card is visible$")
public void social_Card_is_visible() {
	WebElement HomeElement = driver.findElement(By.xpath("//*[@id=\"social\"]/div"));
	Assert.assertEquals(true, HomeElement.isDisplayed());
  System.out.println("Social Card is visible");
}

@Then("^Creative Explorer Card is visible$")
public void creative_Explorer_Card_is_visible() {
	WebElement HomeElement = driver.findElement(By.xpath("//*[@id=\"7GvlkfOiFupy44CiETA8dw\"]/div"));
	Assert.assertEquals(true, HomeElement.isDisplayed());
  System.out.println("Creative Explorer Card is visible");
}

@Then("^National TV Ad Intelligence Card is visible$")
public void national_TV_Ad_Intelligence_Card_is_visible() {
	WebElement HomeElement = driver.findElement(By.xpath("//*[@id=\"nationalTvAdIntelligence\"]/div"));
	Assert.assertEquals(true, HomeElement.isDisplayed());
  System.out.println("National TV Ad Intelligence Card is visible");
}

@Then("^Cross-Platform Ad-Intelligence Card is visible$")
public void cross_Platform_Ad_Intelligence_Card_is_visible() {
	WebElement HomeElement = driver.findElement(By.xpath("//*[@id=\"crossPlatformAdIntelligence\"]/div"));
	Assert.assertEquals(true, HomeElement.isDisplayed());
  System.out.println("Cross-Platform Ad Intelligence Card is visible");
}

@Then("^National TV eCPM Card is visible$")
public void national_TV_eCPM_Card_is_visible() {
	WebElement HomeElement = driver.findElement(By.xpath("//*[@id=\"ecpm\"]/div"));
	Assert.assertEquals(true, HomeElement.isDisplayed());
  System.out.println("National TV eCPM Card is visible");

}


}
