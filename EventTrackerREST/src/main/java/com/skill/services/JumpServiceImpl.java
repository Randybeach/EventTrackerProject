package com.skill.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skill.eventtracker.entities.Jump;
import com.skill.repositories.JumpRepository;

@Service
public class JumpServiceImpl implements JumpService {
	
	@Autowired
	private JumpRepository repo;

	@Override
	public List<Jump> getAllJumps() {
		
		return repo.findAll();
	}

	@Override
	public Jump getJumpById(int id) {
		
		return repo.findJumpById(id);
	}

	@Override
	public Jump saveJump(Jump jump) {
		repo.saveAndFlush(jump);
		return jump;
	}

	@Override
	public Jump editJump(Jump jump, int id) {
		jump.setId(id);
		repo.saveAndFlush(jump);
		return jump;
	}

	@Override
	public Boolean deleteJump(int id) {
		try {
			repo.delete(repo.findJumpById(id));
			return true;
		} catch (Exception e) {
			return false;
		}
		
	}

	
}
