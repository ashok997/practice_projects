package com.maven.spring.test.testApp;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.context.support.FileSystemXmlApplicationContext;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args ){
    	
    	ApplicationContext context = new FileSystemXmlApplicationContext("beans.xml");
        Person person = (Person)context.getBean("person");
        Address address = (Address)context.getBean("address");
        //person.speak();
        
        System.out.println(person);
        System.out.println(address);
        
        ((AbstractApplicationContext)context).close();
    }
}
