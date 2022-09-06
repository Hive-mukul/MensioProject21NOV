package StepDefinition;

import java.io.File;
import java.io.IOException;
import java.util.concurrent.TimeUnit;

import javax.imageio.ImageIO;

import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import ru.yandex.qatools.ashot.AShot;
import ru.yandex.qatools.ashot.Screenshot;

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
public static void Screenshot(String FolderName, String name) {
	Screenshot screenshot = new AShot().takeScreenshot(driver); 
    try {
		ImageIO.write(screenshot.getImage(), "png", new File("/Users/Manu/eclipse-workspace/MensioWebSanity/target/Screenshots/"+FolderName+"/"+name+".png"));
	} catch (IOException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
	}

}
