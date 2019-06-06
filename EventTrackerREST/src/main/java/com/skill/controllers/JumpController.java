package com.skill.controllers;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skill.eventtracker.entities.Jump;
import com.skill.services.JumpService;

@RestController
@RequestMapping("api")
public class JumpController {

	@Autowired
	private JumpService svc;

	@GetMapping("jumps")
	public List<Jump> getAllJumps() {
		return svc.getAllJumps();
	}

	@GetMapping("jumps/{id}")
	public Jump getJumpById(@PathVariable int id) {
		return svc.getJumpById(id);
	}

	@PostMapping("jumps")
	public Jump saveJump(@RequestBody Jump jump) {
		return svc.saveJump(jump);
	}

	@PutMapping("jumps/{id}")
	public Jump editJump(@RequestBody Jump jump, @PathVariable int id, HttpServletResponse resp) {

		Jump j = svc.getJumpById(id);
		System.out.println(j);
		if (j == null) {
			resp.setStatus(404);
			return null;
		}

		return svc.editJump(jump, id);
	}

	@DeleteMapping("jumps/{id}")
	public Boolean deleteJump(@PathVariable int id) {
		return svc.deleteJump(id);
	}
}
