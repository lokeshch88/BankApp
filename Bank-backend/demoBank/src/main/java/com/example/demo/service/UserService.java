package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.pojo.User;
import com.example.demo.repo.UserRepository;
@Service
public class UserService {
	@Autowired
	private UserRepository userRepo;
	

	public List<User> getUsers() {
		
		return userRepo.findAll();
	}


	public User saveUser(User user) {
		
		return userRepo.save(user);
	}


	public User findByEmail(String email) {
		// TODO Auto-generated method stub
		return userRepo.findByEmail(email);
	}

}
