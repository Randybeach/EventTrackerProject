package com.skill.services;

import java.util.List;

import com.skill.eventtracker.entities.Jump;

public interface JumpService {

	List<Jump> getAllJumps();

	Jump getJumpById(int id);

	Jump saveJump(Jump jump);

	Jump editJump(Jump jump, int id);

	Boolean deleteJump(int id);

}
