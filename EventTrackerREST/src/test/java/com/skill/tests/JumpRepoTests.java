package com.skill.tests;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.fail;

import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.skill.repositories.JumpRepository;
@RunWith(SpringRunner.class)
@SpringBootTest
class JumpRepoTests {
	
	@Autowired
	private JumpRepository repo;
	
	@Test
	public void test_jump_mapping() {
		assertEquals(13000, repo.findAll().get(0).getAltitude());
	}

	@Test
	@Disabled
	void test() {
		fail("Not yet implemented");
	}

}


	
	
	

