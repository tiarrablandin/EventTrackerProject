package com.skilldistillery.rockcycles.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.rockcycles.entities.Rock;

public interface RockRepository extends JpaRepository<Rock, Integer>{
	
	Rock findById(Rock id);
	
	List<Rock> findByNameIgnoreCaseLikeOrElementIgnoreCaseLikeOrPlanetIgnoreCaseLikeOrPropertiesIgnoreCaseLikeOrTipsIgnoreCaseLike(String name, String element, String planet, String properties, String tips);

}
