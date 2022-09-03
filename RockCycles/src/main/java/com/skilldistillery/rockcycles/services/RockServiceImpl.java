package com.skilldistillery.rockcycles.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.rockcycles.entities.Rock;
import com.skilldistillery.rockcycles.repositories.RockRepository;

@Service
public class RockServiceImpl implements RockService{

	@Autowired
	private RockRepository repo;
	
	@Override
	public List<Rock> index() {
		return repo.findAll();
	}
	
	@Override
	public Rock findById(int id) {
		return null;
	}
	
	@Override
	public List<Rock> findByKeyword(String keyword) {
		keyword = "%" + keyword + "%";
		return repo.findByNameIgnoreCaseLikeOrElementIgnoreCaseLikeOrPlanetIgnoreCaseLikeOrPropertiesIgnoreCaseLikeOrTipsIgnoreCaseLike(keyword, keyword, keyword, keyword, keyword);
	}
	
	@Override
	public Rock add(Rock rock){
		return repo.saveAndFlush(rock);
	}

	@Override
	public Rock update(int id, Rock rock) {
		rock.setId(id);
		return repo.saveAndFlush(rock);
	}
	
	@Override
	public boolean delete(int id) {
		repo.deleteById(id);
		return !repo.existsById(id);
	}


}
