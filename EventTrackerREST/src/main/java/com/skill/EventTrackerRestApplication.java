package com.skill;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class EventTrackerRestApplication extends SpringBootServletInitializer {
	  @Override
	  protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
	    return application.sources(EventTrackerRestApplication.class);
	  }

	public static void main(String[] args) {
		SpringApplication.run(EventTrackerRestApplication.class, args);
	}

}
