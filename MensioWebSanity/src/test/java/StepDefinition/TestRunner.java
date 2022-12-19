package StepDefinition;

import org.junit.runner.RunWith;
import org.testng.annotations.Test;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;


@RunWith(Cucumber.class)
@CucumberOptions(features="src/test/resources/Features", glue= {"StepDefinition"}, 
monochrome = true, 
plugin = {"pretty", "html:target/HtmlReports"},
tags="@NBCU")


public class TestRunner 
{
	
	

}
