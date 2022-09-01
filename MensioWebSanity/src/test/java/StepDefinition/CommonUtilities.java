package StepDefinition;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class CommonUtilities {
	
	public static WebDriver driver;
	
public static void Chrome()
{
	String projectPath = System.getProperty("user.dir");
	System.out.println("Project Path is:"+projectPath);
	System.setProperty("webdriver.chrome.driver",projectPath+"/src/test/resources/drivers/chromedriver");
	driver = new ChromeDriver();
	driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
	driver.manage().timeouts().pageLoadTimeout(20, TimeUnit.SECONDS);
	driver.manage().window().maximize();
	driver.navigate().to("https://dev.mensio.com/login");
    System.out.println("User is on the login screen");	
}

public static void Home()
{
	driver.navigate().to("https://dev.mensio.com/home");
}

}
