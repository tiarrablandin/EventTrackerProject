package com.skilldistillery.rockcycles.controllers;

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

import com.skilldistillery.rockcycles.entities.Rock;
import com.skilldistillery.rockcycles.services.RockService;

@RestController
@RequestMapping("api")
public class RockController {
	
	@Autowired
	private RockService rockServ; 
	
	@GetMapping("rocks")
	public List<Rock> index(){
		return rockServ.index();
	}
	
	@GetMapping("rocks/{keyword}")
	public List<Rock> findByKeyword(@PathVariable String keyword) {
		return rockServ.findByKeyword(keyword);
	}
	
	@PostMapping("rocks")
	public Rock add(@RequestBody Rock rock, HttpServletResponse res) {
			Rock add = null;
			add = rockServ.add(rock);
			if(add == null) {
				res.setStatus(404);
			} else {
				res.setStatus(201);
		}
		return rock;
	}
	
	@PutMapping("rocks/{id}")
	public Rock update(@PathVariable int id, @RequestBody Rock rock, HttpServletResponse res) {
		Rock updtd = null;
		updtd = rockServ.update(id, rock);
		System.out.println(updtd);
		if(updtd == null) {
			res.setStatus(404);
		} else {
			res.setStatus(201);
		}
		return updtd;
	}
	
	@DeleteMapping("rocks/{id}")
	public void delete(@PathVariable int id, HttpServletResponse res) {
		if(rockServ.delete(id)) {
			res.setStatus(204);
		} else {
			res.setStatus(404);
		}
	}

}
