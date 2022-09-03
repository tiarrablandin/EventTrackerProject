package com.skilldistillery.rockcycles.services;

import java.util.List;

import com.skilldistillery.rockcycles.entities.Rock;

public interface RockService {
	
	List<Rock> index();
	
	Rock findById(int id);

	List<Rock> findByKeyword(String keyword);
	
	public Rock add(Rock rock);
	
	public Rock update(int id, Rock rock);
	
	public boolean delete(int id);

}
