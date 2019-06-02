package com.skill.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skill.eventtracker.entities.Jump;

public interface JumpRepository extends JpaRepository<Jump, Integer> {

	Jump findJumpById(int id);

}
