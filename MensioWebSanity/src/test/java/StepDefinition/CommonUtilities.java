package StepDefinition;

import java.io.File;
import java.io.IOException;
import java.util.concurrent.TimeUnit;

import javax.imageio.ImageIO;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import ru.yandex.qatools.ashot.AShot;
import ru.yandex.qatools.ashot.Screenshot;

public class CommonUtilities {
	
	static String DEV = "https://dev.mensio.com/login";
	static String STG = "https://stg.mensio.com/login";
	static String PROD = "https://mensio.com/login";
	static String projectPath = System.getProperty("user.dir");
	//System.out.println("Project Path is:"+projectPath);
	public static WebDriver driver;
	
	

	
public static void Chrome()
{
	
	System.setProperty("webdriver.chrome.driver",projectPath+"/src/test/resources/drivers/chromedriver");
	System.setProperty("webdriver.chrome.driver",projectPath+"/src/test/resources/drivers/chromedriver.exe");

	driver = new ChromeDriver();
	driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
	driver.manage().timeouts().pageLoadTimeout(20, TimeUnit.SECONDS);
	driver.manage().window().maximize();
	driver.navigate().to(STG);
    System.out.println("User is on the login screen");	
}

public static void Home()
{
//	driver.navigate().to("https://dev.mensio.com/home");
	driver.findElement(By.xpath("//*[@id=\"root\"]/div[1]/div[1]/div/a[1]")).click();
}
public static void Screenshot(String FolderName, String name) {
	Screenshot screenshot = new AShot().takeScreenshot(driver); 
    try {
    
		ImageIO.write(screenshot.getImage(), "png", new File(projectPath+"/target/Screenshots/"+FolderName+"/"+name+".png"));

	} catch (IOException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
	}

//public static void Scroll(String xpath) {
//	JavascriptExecutor js = (JavascriptExecutor) driver;
//	WebElement Element = driver.findElement(By.xpath("+xpath"));
//	js.executeScript("arguments[0].scrollIntoView();", Element);
//}

}
