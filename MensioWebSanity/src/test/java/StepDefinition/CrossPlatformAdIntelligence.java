package StepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import junit.framework.Assert;

public class CrossPlatformAdIntelligence extends CommonUtilities {
	
///////Verify that Cross Platform Share of Voice by Brand chart is loading properly//////
	
	@When("^user click on Cross Platform Ad Intelligence Card")
	public void user_click_on_Cross_Platform_Ad_Intelligence_Card() {
		CommonUtilities.Home();
		driver.findElement(By.xpath("//*[@id=\"crossPlatformAdIntelligence\"]/div")).click();
	}
	
	@Then("^user navigates to Cross Platform Ad Intelligence Screen")
	public void user_navigates_to_Cross_Platform_Ad_Intelligence_Screen() {
		WebDriverWait wait = new WebDriverWait(driver,40);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div[1]/div[1]/div[1]/span")));
	}
	
	@Then("^Share of Voice by Brand chart gets loaded")
	public void Share_of_Voice_by_Brand_chart_gets_loaded() {
		WebDriverWait wait = new WebDriverWait(driver,40);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div[1]/div[2]/div[4]/div[1]/span")));
	}
	
	@And("^take screenshot of Share of Voice by Brand chart")
	public void take_screenshot_of_Share_of_Voice_by_Brand_chart() {
		CommonUtilities.Screenshot("Cross Platform Ad Intelligence", "Share of Voice by Brand");
	}
	
	@Then("^user click on Share of Voice by Brand Owner")
	public void user_click_on_Share_of_Voice_by_Brand_Owner() throws InterruptedException {
		driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div[1]/div[1]/div[2]/span")).click();
		Thread.sleep(120000);
	}
	
	@Then("^Share of Voice by Brand Owner chart gets loaded")
	public void Share_of_Voice_by_Brand_Owner_chart_gets_loaded() {
		WebDriverWait wait = new WebDriverWait(driver,40);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div[1]/div[2]/div[4]/div[1]/span")));
	}
	
	@And("^take screenshot of Share of Voice by Brand Owner chart")
	public void take_screenshot_of_Share_of_Voice_by_Brand_Owner_chart() {
		CommonUtilities.Screenshot("Cross Platform Ad Intelligence", "Share of Voice by Brand Owner");
	}
	
	/////Verify that Cross Platform Indexed Spend by Channel chart is loading is properly////
	
	@When("^user scroll down to Indexed Spend by Channel section")
	public void user_scroll_down_to_Indexed_Spend_by_Channel_section() {
		JavascriptExecutor js = (JavascriptExecutor) driver;
		WebElement Element = driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div[2]/div[2]/div[3]/span"));
		js.executeScript("arguments[0].scrollIntoView();", Element);
	}
	
	@Then("^Indexed Spend by Channel chart gets loaded")
	public void Indexed_Spend_by_Channel_chart_gets_loaded() {
		WebDriverWait wait = new WebDriverWait(driver,40);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div[2]/div[2]/div[4]/div[1]/table/thead/tr[1]/th[2]")));
	}
	
	@And("^take screenshot of Indexed Spend by Channel chart")
	public void take_screenshot_of_Indexed_Spend_by_Channel_chart() {
		CommonUtilities.Screenshot("Cross Platform Ad Intelligence", "Indexed Spend by Channel");
	}
	
	@Then("^user click on Indexed Spend by Brand Owner")
	public void user_click_on_Indexed_Spend_by_Brand_Owner() throws InterruptedException {
		driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div[2]/div[1]/div[2]")).click();
		Thread.sleep(120000);
	}
	
	@Then("^Indexed Spend by Brand Owner chart gets loaded")
	public void Indexed_Spend_by_Brand_Owner_chart_gets_loaded() {
		WebElement HomeElement = driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div[2]/div[2]/div[4]/div[1]/table/thead/tr[1]/th[1]"));
		Assert.assertEquals(true, HomeElement.isDisplayed());
	}
	
	@And("^take screenshot of Indexed Spend by Brand Owner chart")
	public void take_screenshot_of_Indexed_Spend_by_Brand_Owner_chart() {
		CommonUtilities.Screenshot("Cross Platform Ad Intelligence", "Indexed Spend By Brand Owner");
	}
	
	///////Verify that Cross Platform Indexed Spend Matrix by Channel chart is loading properly//////
	
	@When("^user scroll down to Indexed Spend Matrix by Channel section")
	public void user_scroll_down_to_Indexed_Spend_Matrix_by_Channel_section() {
		JavascriptExecutor js = (JavascriptExecutor) driver;
		WebElement Element = driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div[3]/div[2]/div[3]/div/div[1]/div[1]"));
		js.executeScript("arguments[0].scrollIntoView();", Element);
	}
	
	@Then("^Indexed Spend Matrix by Channel chart gets loaded")
	public void Indexed_Spend_Matrix_by_Channel_chart_gets_loaded() {
		WebElement HomeElement = driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div[3]/div[2]/div[3]/div/div[2]"));
		Assert.assertEquals(true, HomeElement.isDisplayed());
	}
	
	@And("^take screenshot of Indexed Spend Matrix by Channel chart")
	public void take_screenshot_of_Indexed_Spend_Matrix_by_Channel_chart() {
		CommonUtilities.Screenshot("Cross Platform Ad Intelligence", "Indexed Spend Matrix by Channel");
	}
	
	@Then("^user click on Indexed Spend Matrix by Brand Owner")
	public void user_click_on_Indexed_Spend_Matrix_by_Brand_Owner() throws InterruptedException {
		driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div[3]/div[1]/div[2]")).click();
		Thread.sleep(120000);
	}
	
	@Then("^Indexed Spend Matrix by Brand Owner chart gets loaded")
	public void Indexed_Spend_Matrix_by_Brand_Owner_chart_gets_loaded() {
		WebElement HomeElement = driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div[3]/div[2]/div[3]/div/div[2]"));
		Assert.assertEquals(true, HomeElement.isDisplayed());
	}
	
	@And("^take screenshot of Indexed Spend Matrix by Brand Onwer chart")
	public void take_screenshot_of_Indexed_Spend_Matrix_by_Brand_Onwer_chart() {
		CommonUtilities.Screenshot("Cross Platform Ad Intelligence", "Indexed Spend Matrix by Brand Owner");
	}
	
	//////////Verify that Cross Platform Commercial Mix chart is loading properly/////////
	
	@When("^user click on Commercial Mix sidemenu option")
	public void user_click_on_Commercial_Mix_sidemenu_option() throws InterruptedException {
		driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[1]/div[2]/div/div[1]/div[2]/div/div/div[1]/div[3]/a/p")).click();
		Thread.sleep(120000);
	}
	
	@Then("^Distribution of Estimated Spend by CrossPlatform Ad Format chart gets loaded")
	public void Distribution_of_Estimated_Spend_by_CrossPlatform_Ad_Format_chart_gets_loaded() {
		WebElement HomeElement = driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div/div[2]/div[4]"));
		Assert.assertEquals(true, HomeElement.isDisplayed());
	}
	
	@And("^take screenshot of Distribution of Estimated Spend by CrossPlatform Ad Format chart")
	public void take_screenshot_of_Distribution_of_Estimated_Spend_by_CrossPlatform_Ad_Format_chart() {
		CommonUtilities.Screenshot("Cross Platform Ad Intelligence", "Distribution of Estimated Spend by CrossPlatform Ad Format");
	}
	
	@Then("^user click on Distribution of Estimated Spend by CrossPlatform Ad Format Brand Owner")
	public void user_click_on_Distribution_of_Estimated_Spend_by_CrossPlatform_Ad_Format_Brand_Owner() throws InterruptedException {
		driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div/div[1]/div[2]")).click();
		Thread.sleep(120000);
	}
	
	@Then("^Distribution of Estimated Spend by CrossPlatform Ad Format Brand Owner chart gets loaded")
	public void Distribution_of_Estimated_Spend_by_CrossPlatform_Ad_Format_Brand_Owner_chart_gets_loaded() {
		WebElement HomeElement = driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div/div[2]/div[4]"));
		Assert.assertEquals(true, HomeElement.isDisplayed());
	}
	
	@And("^take screenshot of Distribution of Estimated Spend by CrossPlatform Ad Format Brand Owner chart")
	public void take_screenshot_of_Distribution_of_Estimated_Spend_by_CrossPlatform_Ad_Format_Brand_Owner_chart() {
		CommonUtilities.Screenshot("Cross Platform Ad Intelligence", "Distribution of Estimated Spend by CrossPlatform Ad Format Brand Owner");
	}
	
	////////////Verify that Cross Platform Delivery Trend Charts are loading properly//////////
	
	@When("^user click on Cross Delivery Trends sidemenu option")
	public void user_click_on_Cross_Delivery_Trends_sidemenu_option() throws InterruptedException {
		driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[1]/div[2]/div/div[1]/div[2]/div/div/div[1]/div[4]/a/p")).click();
		Thread.sleep(120000);
	}
	
	@Then("^Indexed Delivery Trends by Media Channel chart gets loaded")
	public void Indexed_Delivery_Trends_by_Media_Channel_chart_gets_loaded() {
		WebElement HomeElement = driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div[1]/div[2]/div[6]/span"));
		Assert.assertEquals(true, HomeElement.isDisplayed());
	}
	
	@And("^take screenshot of Indexed Delivery Trends by Media Channel chart")
	public void take_screenshot_of_Indexed_Delivery_Trends_by_Media_Channel_chart() {
		CommonUtilities.Screenshot("Cross Platform Ad Intelligence", "Indexed Delivery Trends by Media Channel");
	}
	
	@Then("^user click on Indexed Delivery Trends by Media Channel Brand Owner")
	public void user_click_on_Indexed_Delivery_Trends_by_Media_Channel_Brand_Owner() throws InterruptedException {
		driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div[1]/div[1]/div[2]")).click();
		Thread.sleep(120000);
	}
	
	@Then("^Indexed Delivery Trends by Media Channel Brand Owner chart gets loaded")
	public void Indexed_Delivery_Trends_by_Media_Channel_Brand_Owner_chart_gets_loaded() {
		WebElement HomeElement = driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div[1]/div[2]/div[3]/span"));
		Assert.assertEquals(true, HomeElement.isDisplayed());
	}
	
	@And("^take screenshot of Indexed Delivery Trends by Media Channel Brand Owner chart")
	public void take_screenshot_of_Indexed_Delivery_Trends_by_Media_Channel_Brand_Owner_chart() {
		CommonUtilities.Screenshot("Cross Platform Ad Intelligence", "Indexed Delivery Trends by Media Channel Brand Owner");
	}
	
	@Then("^user scroll down to Cross Share of Daily TV Spend chart")
	public void user_scroll_down_to_Cross_Share_of_Daily_TV_Spend_chart() {
		JavascriptExecutor js = (JavascriptExecutor) driver;
		WebElement Element = driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div[2]/div[2]/div[3]/div"));
		js.executeScript("arguments[0].scrollIntoView();", Element);
	}
	
	@Then("^Cross Share of Daily TV Spend chart gets loaded")
	public void Cross_Share_of_Daily_TV_Spend_chart_gets_loaded() {
		WebElement HomeElement = driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div[2]/div[2]/div[3]/span"));
		Assert.assertEquals(true, HomeElement.isDisplayed());
	}
	
	@And("^take screenshot of Cross Share of Daily TV Spend chart")
	public void take_screenshot_of_Cross_Share_of_Daily_TV_Spend_chart() {
		CommonUtilities.Screenshot("Cross Platform Ad Intelligence", "Share of Daily TV Spend (Digital and TV)");
	}
	
	@Then("^user click on Daily TV Spend Brand Owner")
	public void user_click_on_Daily_TV_Spend_Brand_Owner() throws InterruptedException {
		driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div[2]/div[1]/div[2]")).click();
		Thread.sleep(120000);
	}
	
	@Then("^Daily TV Spend Brand Owner chart gets loaded")
	public void Daily_TV_Spend_Brand_Owner_chart_gets_loaded() {
		WebElement HomeElement = driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div[2]/div[2]/div[3]/span"));
		Assert.assertEquals(true, HomeElement.isDisplayed());
	}
	
	@And("^take screenshot of Daily TV Spend Brand Owner chart")
	public void take_screenshot_of_Daily_TV_Spend_Brand_Owner_chart() {
		CommonUtilities.Screenshot("Cross Platform Ad Intelligence", "Share of Daily TV Spend (Digital and TV) Brand Owner");
	}
	
	@Then("^user scroll down to Cross Segment Delivery Trends chart")
	public void user_scroll_down_to_Cross_Segment_Delivery_Trends_chart() {
		JavascriptExecutor js = (JavascriptExecutor) driver;
		WebElement Element = driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div[3]/div[2]/div[3]/div/div[1]"));
		js.executeScript("arguments[0].scrollIntoView();", Element);
	}
	
	@Then("^Cross Segment Delivery Trends chart gets loaded")
	public void Cross_Segment_Delivery_Trends_chart_gets_loaded() {
		WebElement HomeElement = driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div[3]/div[2]/div[6]"));
		Assert.assertEquals(true, HomeElement.isDisplayed());
	}
	
	@And("^take screenshot of Cross Segment Delivery Trends chart")
	public void take_screenshot_of_Cross_Segment_Delivery_Trends_chart() {
		CommonUtilities.Screenshot("Cross Platform Ad Intelligence", "Segment Delivery Trends");
	}
	
	@Then("^user click on Cross Segment Delivery Trends Brand Owner")
	public void user_click_on_Cross_Segment_Delivery_Trends_Brand_Owner() throws InterruptedException {
		driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div[3]/div[1]/div[2]")).click();
		Thread.sleep(120000);
	}
	
	@Then("^Cross Segment Delivery Trends Brand Owner chart gets loaded")
	public void Cross_Segment_Delivery_Trends_Brand_Owner_chart_gets_loaded() {
		WebElement HomeElement = driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div[3]/div[2]/div[5]/div"));
		Assert.assertEquals(true, HomeElement.isDisplayed());
	}
	
	@And("^take screenshot of Cross Segment Delivery Trends Brand Owner chart")
	public void take_screenshot_of_Cross_Segment_Delivery_Trends_Brand_Owner_chart() {
		CommonUtilities.Screenshot("Cross Platform Ad Intelligence", "Segment Delivery Trends Brand Owner");
	}
	
	

}
