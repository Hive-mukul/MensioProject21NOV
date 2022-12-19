package StepDefinition;

import java.util.concurrent.TimeUnit;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;


import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import junit.framework.Assert;

public class NBCU extends CommonUtilities {
		
	
	
	@When("^user click on NBCU card$")
	public void user_click_on_NBCU_card() throws InterruptedException
	{
		CommonUtilities.Home();
		driver.findElement(By.xpath("//*[@id=\"nbcu\"]/div")).click();
	//	driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[1]/div[2]/div/div[1]/div[2]/div/div/div[1]/div[4]")).click();
		Thread.sleep(10000);		
	}	
	
	// Summary reporting - By Brand & Asset Type chart (CHART 1)
	
	@Then("^Summary Reporting chart1")
	public void Summary_Reporting_chart1() throws InterruptedException
	{
		
		driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div/div[2]/div[1]/div[4]/div/div")).click();
	    Thread.sleep(5000);
		driver.findElement(By.xpath("//div[4]/div/div/div/div/div/div/div/input")).sendKeys("2022"+"\n");	
		Thread.sleep(5000);
		driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div/div[2]/div[2]/div[1]/div/div")).click();  // click on episode filter 
		driver.findElement(By.xpath("//div[2]/div/div/input")).sendKeys("Alpine"+"\n");     // episode selection 
		Thread.sleep(5000);	
		driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div/div[2]/div[2]/div[4]")).click();   // submit button 
		WebDriverWait wait = new WebDriverWait(driver,30);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div/span[1]")));
		System.out.println("By Brand & Asset Type chart1 is visible");
	}
	
	@And("^take screenshot of the NBCU_Summary Metrics chart1$")
	public void take_screenshot_of_the_NBCU_Summary_Metrics_chart1() 
	{
	    CommonUtilities.Screenshot("NBCU","Summary Metrics chart1");
	    
	}
	
	// Summary reporting - By Brand & Program chart (CHART 2)
	
	@Then("^Summary Reporting chart2")
	public void Summary_Reporting_chart2() throws InterruptedException
	{
	
		driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[1]/div[2]/div/div[1]/div[2]/div/div/div[1]/div[3]/a/p")).click();
		Thread.sleep(10000);
		driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div/div[3]/div[1]/div[4]/div/div")).click();
		Thread.sleep(5000);
		driver.findElement(By.xpath("//div[4]/div/div/div/div/div/div/div/input")).sendKeys("2022"+"\n");
		Thread.sleep(5000);
		driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div/div[3]/div[2]/div[1]/div/div")).click();
		Thread.sleep(5000);	
		driver.findElement(By.xpath("//div[2]/div/div/div/div/div/div/div/div/input")).sendKeys("Alpine"+"\n");
		Thread.sleep(5000);	
		driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div/div[3]/div[2]/div[4]")).click();
		WebDriverWait wait = new WebDriverWait(driver,30);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div/span[1]")));
		System.out.println("By Brand & Program chart2 is visible");
		
	}
		
	
	@And("^take screenshot of the NBCU_Summary Metrics chart2$")
	public void take_screenshot_of_the_NBCU_Summary_Metrics_chart2() 
	{
	    CommonUtilities.Screenshot("NBCU","Summary Metrics chart2");
	    
	}
	
	//////Verify that NBCU Visual By Brand chart loads properly///////////
	
	

	@Then("^user choose brand$")
	public void user_choose_brand() throws InterruptedException {
		
		WebDriverWait wait = new WebDriverWait(driver, 100); 
		WebElement element = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id=\"contents-container\"]/div/div[1]/div[2]/div/div[1]/div[2]/div/div/div[1]/div[4]")));
		element.click();

		
		//driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[1]/div[2]/div/div[1]/div[2]/div/div/div[1]/div[4]")).click();
		Thread.sleep(8000);
		driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div/div[3]/div[1]/div[1]/div/div/div")).click();
		driver.findElement(By.xpath("//input")).sendKeys("Ford"+"\n");
		
	}
	
	@Then("^user choose date$")
	public void user_choose_date() {
		driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div/div[3]/div[1]/div[2]/div/div")).click();
		driver.findElement(By.xpath("/html/body/div[2]/div[3]/div/div/div/div/div[3]/div[1]/div[1]/div[1]/div")).click();
		driver.findElement(By.xpath("/html/body/div[2]/div[3]/div/div/div/div/div[3]/div[1]/div[1]/div[1]/input")).sendKeys("2022-05-01");
		driver.findElement(By.xpath("/html/body/div[2]/div[3]/div/div/div/div/div[3]/div[2]")).click();
	}
	
	@Then("^NBCU Visual By Brand Chart gets loaded$")
	public void NBCU_Visual_By_Brand_Chart_gets_loaded() {
		driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div/div[3]/div[3]/div[4]")).click();
		WebDriverWait wait = new WebDriverWait(driver,40);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div/div[4]/div[1]/table/thead/tr/th[4]")));
	}
	
	@And("^take screenshot of NBCU Visual By Brand chart$")
	public void take_screenshot_of_NBCU_Visual_By_Brand_chart() {
		CommonUtilities.Screenshot("NBCU", "Visual - By Brand");
	}
	
	/////Verify that NBCU By Brand and Asset type chart loads properly/////
	
	@When("^user click on By Brand and Asset type side menu option$")
	public void user_click_on_By_Brand_and_Asset_type_side_menu_option() throws InterruptedException {
		driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[1]/div[2]/div/div[1]/div[2]/div/div/div[1]/div[5]/a")).click();
		Thread.sleep(4000);
	}
	
	@Then("^user choose Brand in By Brand and Asset type$")
	public void user_choose_Brand_in_By_Brand_and_Asset_type() {
		driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div/div[2]/div[1]/div[1]/div/div")).click();
		driver.findElement(By.xpath("//input")).sendKeys("Ford");
		driver.findElement(By.xpath("//input")).sendKeys(Keys.ENTER);
	}
	
	@Then("^user choose Date in By Brand and Asset type$")
	public void user_choose_Date_in_By_Brand_and_Asset_type() {
		driver.findElement(By.xpath("//div[@id='contents-container']/div/div[2]/div/div[2]/div/div[2]/div/div/div")).click(); 
		driver.findElement(By.xpath("/html/body/div[2]/div[3]/div/div/div/div/div[3]/div[1]/div[1]/div[1]/div")).click();
		driver.findElement(By.xpath("/html/body/div[2]/div[3]/div/div/div/div/div[3]/div[1]/div[1]/div[1]/input")).sendKeys("2022-05-01");
		driver.findElement(By.xpath("/html/body/div[2]/div[3]/div/div/div/div/div[3]/div[1]/div[1]/div[2]/div")).click();
		driver.findElement(By.xpath("/html/body/div[2]/div[3]/div/div/div/div/div[3]/div[1]/div[1]/div[2]/input")).sendKeys("2022-05-31");
		driver.findElement(By.xpath("/html/body/div[2]/div[3]/div/div/div/div/div[3]/div[2]")).click();
	}
	
	@Then("^user click on Submit button$")
	public void user_click_on_Submit_button() {
		driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div/div[2]/div[3]/div[4]")).click();
	}
	
	@Then("^By Brand and Asset type chart gets loaded$")
	public void By_Brand_and_Asset_type_chart_gets_loaded() {
		WebDriverWait wait = new WebDriverWait(driver,40);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div/div[3]/div/div[1]/table/thead/tr/th[5]")));
	}
	
	@And("^take screenshot of By Brand and Asset type chart$")
	public void take_screenshot_of_By_Brand_and_Asset_type_chart() {
		CommonUtilities.Screenshot("NBCU", "By Brand & Asset Type");
	}
	
	///Verify that NBCU Visual By Program chart loads properly////
	
	@When("^user click on NBCU Visual By Program sidemenu option$")
	public void user_click_on_NBCU_Visual_By_Program_sidemenu_option() throws InterruptedException {
		driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[1]/div[2]/div/div[1]/div[2]/div/div/div[1]/div[6]/a")).click();
		Thread.sleep(3000);
	}
	
	@Then("^user choose date range for By Program$")
	public void user_choose_date_range_for_By_Program() throws InterruptedException {
		driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div/div[2]/div[1]/div[1]/div/div")).click();
		driver.findElement(By.xpath("/html/body/div[2]/div[3]/div/div/div/div/div[3]/div[1]/div[1]/div[1]/div")).click();
		driver.findElement(By.xpath("/html/body/div[2]/div[3]/div/div/div/div/div[3]/div[1]/div[1]/div[1]/input")).sendKeys("2022-05-01");
		driver.findElement(By.xpath("/html/body/div[2]/div[3]/div/div/div/div/div[3]/div[1]/div[1]/div[2]/div")).click();
		driver.findElement(By.xpath("/html/body/div[2]/div[3]/div/div/div/div/div[3]/div[1]/div[1]/div[2]/input")).sendKeys("2022-05-31");
		driver.findElement(By.xpath("/html/body/div[2]/div[3]/div/div/div/div/div[3]/div[2]")).click();
		Thread.sleep(3000);
	}
	
	@Then("^user choose program and episode for By Program$")
	public void user_choose_program_and_episode_for_By_Program() throws InterruptedException {
		driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div/div[2]/div[2]/div[2]/div/div")).click();
		driver.findElement(By.xpath("//div[2]/div[2]/div[2]/div/div/div/div/div/div/div/input")).sendKeys("e"+"\n");
		Thread.sleep(3000);
		driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div/div[2]/div[2]/div[3]/div/div")).click();
		driver.findElement(By.xpath("//div[3]/div/div/div/div/div/div/div/input")).sendKeys("Unti"+"\n");	
	}
	
	@Then("^user click on NBCU By Program Submit button$")
	public void user_click_on_NBCU_By_Program_Submit_button() {
		driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div/div[2]/div[3]/div[3]")).click();
	}
	
	@Then("^Visual By Program chart gets loaded$")
	public void Visual_By_Program_chart_gets_loaded() {
		WebElement HomeElement = driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div/div[3]/div[1]/table/thead/tr/th[4]"));
		Assert.assertEquals(true, HomeElement.isDisplayed());
	}
	
	@And("^take screenshot of NBCU Visual By Program chart$")
	public void take_screenshot_of_NBCU_Visual_By_Program_chart() {
		CommonUtilities.Screenshot("NBCU", "By Program");
	}
	
	/////Verify that NBCU Visual By Program and Asset type chart loads properly/////
	
	@When("^user click on NBCU Visual By Program and Asset type chart$")
	public void user_click_on_NBCU_Visual_By_Program_and_Asset_type_chart() {
		driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[1]/div[2]/div/div[1]/div[2]/div/div/div[1]/div[7]/a")).click();
	}
	
	@Then("^user choose date range for By Program and Asset type$")
	public void user_choose_date_range_for_By_Program_and_Asset_type() throws InterruptedException {
		driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div/div[2]/div[1]/div[1]/div/div")).click();
		driver.findElement(By.xpath("/html/body/div[2]/div[3]/div/div/div/div/div[3]/div[1]/div[1]/div[1]/div")).click();
		driver.findElement(By.xpath("/html/body/div[2]/div[3]/div/div/div/div/div[3]/div[1]/div[1]/div[1]/input")).sendKeys("2022-05-01");
		driver.findElement(By.xpath("/html/body/div[2]/div[3]/div/div/div/div/div[3]/div[1]/div[1]/div[2]/div")).click();
		driver.findElement(By.xpath("/html/body/div[2]/div[3]/div/div/div/div/div[3]/div[1]/div[1]/div[2]/input")).sendKeys("2022-05-31");
		driver.findElement(By.xpath("/html/body/div[2]/div[3]/div/div/div/div/div[3]/div[2]")).click();
		Thread.sleep(3000);
	}
	
	@Then("^user choose program and episode for By Program and Asset type chart$")
	public void user_choose_program_and_episode_for_By_Program_and_Asset_type_chart() throws InterruptedException {
		driver.findElement(By.xpath("//div[@id='contents-container']/div/div[2]/div/div[2]/div[2]/div[2]/div/div/div/div")).click();
		driver.findElement(By.xpath("//div[@id='contents-container']/div/div[2]/div/div[2]/div[2]/div[2]/div/div/div/div/div/div/div/input")).sendKeys("e"+"\n");
		Thread.sleep(3000);
		driver.findElement(By.xpath("//div[@id='contents-container']/div/div[2]/div/div[2]/div[2]/div[3]/div/div/div")).click();
		driver.findElement(By.xpath("//div[3]/div/div/div/div/div/div/div/input")).sendKeys("u"+"\n");
	}
	
	@Then("^user click on By Program and Asset Submit button$")
	public void user_click_on_By_Program_and_Asset_Submit_button() throws InterruptedException {
		driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div/div[2]/div[3]/div[3]")).click();	
		Thread.sleep(6000);
	}
	
	@Then("^NBCU By Program and Asset Type Chart gets loaded$")
	public void NBCU_By_Program_and_Asset_Type_Chart_gets_loaded() {
		WebElement HomeElement = driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div/div[2]/div[3]/div[3]"));
		Assert.assertEquals(true, HomeElement.isDisplayed());
	}
	
	@And("^take screenshot of NBCU By Program and Asset type chart$")
	public void take_screenshot_of_NBCU_By_Program_and_Asset_type_chart() {
		CommonUtilities.Screenshot("NBCU", "By Program & Asset Type");
	}
	
	//////Verify that NBCU Visual By Occurrence chart loads properly/////
	
	@When("^user click on NBCU Visual By Occurrence sidemenu option$")
	public void user_click_on_NBCU_Visual_By_Occurrence_sidemenu_option() {
		driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[1]/div[2]/div/div[1]/div[2]/div/div/div[1]/div[8]/a")).click();
	}
	
	@Then("^user choose Brand for Visual By Occurrence$")
	public void user_choose_Brand_for_Visual_By_Occurrence() {
		driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div/div[2]/div[1]/div[1]/div/div/div/div[2]/div[1]")).click();
		driver.findElement(By.xpath("//input")).sendKeys("Ford"+"\n");
	}
	
	@Then("^user choose date range for Visual By Occurrence$")
	public void user_choose_date_range_for_Visual_By_Occurrence() throws InterruptedException {
		driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div/div[2]/div[1]/div[2]/div/div")).click();
		driver.findElement(By.xpath("/html/body/div[2]/div[3]/div/div/div/div/div[3]/div[1]/div[1]/div[1]/div")).click();
		driver.findElement(By.xpath("/html/body/div[2]/div[3]/div/div/div/div/div[3]/div[1]/div[1]/div[1]/input")).sendKeys("2022-05-01");
		driver.findElement(By.xpath("/html/body/div[2]/div[3]/div/div/div/div/div[3]/div[1]/div[1]/div[2]/div")).click();
		driver.findElement(By.xpath("/html/body/div[2]/div[3]/div/div/div/div/div[3]/div[1]/div[1]/div[2]/input")).sendKeys("2022-05-31");
		driver.findElement(By.xpath("/html/body/div[2]/div[3]/div/div/div/div/div[3]/div[2]")).click();
		Thread.sleep(4000);
	}
	
	@Then("^user choose program and episode for Visual By Occurrence$")
	public void user_choose_program_and_episode_for_Visual_By_Occurrence() throws InterruptedException {
		driver.findElement(By.xpath("//div[@id='contents-container']/div/div[2]/div/div[2]/div[2]/div[2]/div/div/div/div/div")).click();
		driver.findElement(By.xpath("//div[2]/div[2]/div[2]/div/div/div/div/div/div/div/input")).sendKeys("e"+"\n");
		Thread.sleep(4000);
		driver.findElement(By.xpath("//div[@id='contents-container']/div/div[2]/div/div[2]/div[2]/div[3]/div/div/div/div/div")).click();
		driver.findElement(By.xpath("//div[3]/div/div/div/div/div/div/div/input")).sendKeys("u"+"\n");
	}
	
	@Then("^user click on Submit button for Visual By Occurrence$")
	public void user_click_on_Submit_button_for_Visual_By_Occurrence() {
		driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div/div[2]/div[3]/div[3]")).click();
	}
	
	@Then("^NBCU Visual By Occurrence chart gets loaded$")
	public void NBCU_Visual_By_Occurrence_chart_gets_loaded() {
		WebElement HomeElement = driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div/div[3]/div[1]/table/thead/tr/th[8]"));
		Assert.assertEquals(true, HomeElement.isDisplayed());
	}
	
	@And("^take screenshot of NBCU Visual By Occurrence chart$")
	public void take_screenshot_of_NBCU_Visual_By_Occurrence_chart() {
		CommonUtilities.Screenshot("NBCU", "Visual - By Occurrence");
	}
	
	
	
	
	// Test case for Verbal - By Brand Chart
	
	
	@When("^NBCU Verbal bybrand chart")
	public void NBCU_Verbal_bybrand_chart() throws InterruptedException 
	{
	
		driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[1]/div[2]/div/div[1]/div[2]/div/div/div[1]/div[9]/a")).click(); // clicking on verbal by brand tab 
		Thread.sleep(5000);	
		driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div/div[3]/div[1]/div[1]/div/div")).click(); // to select brand
		driver.findElement(By.xpath("//input")).sendKeys("Ford"+"\n");
		driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div/div[3]/div[1]/div[2]/div/div")).click(); // click on date filter
		driver.findElement(By.xpath("/html/body/div[2]/div[3]/div/div/div/div/div[3]/div[1]/div[1]/div[1]/div")).click(); // clear start date
		driver.findElement(By.xpath("//div[3]/div/div/div/input")).sendKeys("2022-05-01");
		driver.findElement(By.xpath("/html/body/div[2]/div[3]/div/div/div/div/div[3]/div[1]/div[1]/div[2]/div")).click(); // clear end date
		driver.findElement(By.xpath("//div[2]/input")).sendKeys("2022-05-31");
		driver.findElement(By.xpath("/html/body/div[2]/div[3]/div/div/div/div/div[3]/div[2]")).click(); // click done date filter dialog
		driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div/div[3]/div[2]/div[7]")).click(); // click on submit button 
		WebDriverWait wait = new WebDriverWait(driver,30);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div/div[4]/div[1]/table/thead/tr/th[1]")));
		System.out.println("Verbal By Brand chart is visible");
				
		
		
	}
	
	@And("^take screenshot of the NBCU Verbal bybrand chart$")
	public void take_screenshot_of_the_NBCU_Verbal_bybrand_chart() 
	{
	    CommonUtilities.Screenshot("NBCU","Verbalbybrand");
	    
	}
	

	
	// Test case for Verbal - By Program Chart
	
	@When("^NBCU Verbal byprogram chart")
	public void NBCU_Verbal_byprogram_chart() throws InterruptedException
	{
		driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[1]/div[2]/div/div[1]/div[2]/div/div/div[1]/div[10]/a")).click(); // Clicking on Verbal by program chart
		Thread.sleep(5000);	
		driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div/div[2]/div[1]/div[1]/div/div")).click(); // clicking on date filter
		driver.findElement(By.xpath("/html/body/div[2]/div[3]/div/div/div/div/div[3]/div[1]/div[1]/div[1]/div")).click(); // clicking on cross button start date
		driver.findElement(By.xpath("//div[3]/div/div/div/input")).sendKeys("2022-05-01"); // entering start date
		driver.findElement(By.xpath("/html/body/div[2]/div[3]/div/div/div/div/div[3]/div[1]/div[1]/div[2]/div")).click(); // clicking on cross button end date
		driver.findElement(By.xpath("//div[2]/input")).sendKeys("2022-05-31"); // entering end date
		driver.findElement(By.xpath("/html/body/div[2]/div[3]/div/div/div/div/div[3]/div[2]")).click(); // clicking on done button 
		Thread.sleep(5000);	
		driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div/div[2]/div[2]/div[1]/div/div")).click(); // clicking on program filter
		driver.findElement(By.xpath("//div[2]/div[2]/div/div/div/div/div/div/div/div/input")).sendKeys("148"+"\n"); // entering program 
		Thread.sleep(5000);	
		driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div/div[2]/div[2]/div[2]/div/div")).click(); // clicking on episode filter
		driver.findElement(By.xpath("//div[2]/div[2]/div[2]/div/div/div/div/div/div/div/input")).sendKeys("Untitled"+"\n");
		driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div/div[2]/div[2]/div[5]")).click(); // clicking submit button 
		WebDriverWait wait = new WebDriverWait(driver,30);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div/div[3]/div[1]/table/thead/tr/th[1]")));
		System.out.println("Verbal By Program chart is visible");
	}
	
	@And("^take screenshot of the NBCU Verbal byprogram chart$")
	public void take_screenshot_of_the_NBCU_Verbal_byprogram_chart() 
	{
	    CommonUtilities.Screenshot("NBCU","Verbalbyprogram");
	    
	}
	
	//////Verify that NBCU Verbal Occurrence chart///////////
	
	
	@Then("^NBCU verbal occurrence chart")
	public void NBCU_verbal_occurrence_chart() throws InterruptedException
	{
		
		driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[1]/div[2]/div/div[1]/div[2]/div/div/div[1]/div[11]/a")).click();   //click on occurrence tab
	    Thread.sleep(5000);
		driver.findElement(By.xpath("//input")).sendKeys("Ford"+"\n");	
		driver.findElement(By.xpath("//div[2]/div/div[2]/div/div[2]/div/div/div")).click(); //opening date dialog
		driver.findElement(By.xpath("/html/body/div[2]/div[3]/div/div/div/div/div[3]/div[1]/div[1]/div[1]/div")).click();   //clearing date
		driver.findElement(By.xpath("//div[3]/div/div/div/input")).sendKeys("2022-05-01"); // entering date
		driver.findElement(By.xpath("/html/body/div[2]/div[3]/div/div/div/div/div[3]/div[1]/div[1]/div[2]/div")).click();
		driver.findElement(By.xpath("//div[2]/input")).sendKeys("2022-05-31");
		driver.findElement(By.xpath("/html/body/div[2]/div[3]/div/div/div/div/div[3]/div[2]")).click();
		Thread.sleep(5000);
		driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div/div[2]/div[2]/div[2]/div/div")).click(); // opening program filter
	    driver.findElement(By.xpath("//div[2]/div[2]/div[2]/div/div/div/div/div/div/div/input")).sendKeys("148"+"\n");
	    Thread.sleep(5000);	    
	    driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div/div[2]/div[2]/div[3]/div/div")).click(); // opening episode filter
	    driver.findElement(By.xpath("//div[3]/div/div/div/div/div/div/div/input")).sendKeys("2022-05-07"+"\n");
	    driver.findElement(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div/div[2]/div[2]/div[6]")).click();	    
	    WebDriverWait wait = new WebDriverWait(driver,30);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"contents-container\"]/div/div[2]/div/div[3]/div[1]/table/thead/tr")));
		System.out.println("NBCU-Verbal-Occurrence chart is visible");
	    
	}
	
	@And("^take screenshot of the NBCU verbal occurrence chart$")
	public void take_screenshot_of_the_NBCU_verbal_occurrence_chart()
	{
		CommonUtilities.Screenshot("NBCU","VerbalOccurrence chart");
	    
	}
	
	

}
