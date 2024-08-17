package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.pojo.User;
import com.example.demo.service.UserService;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "http://192.168.0.78:3000")
public class UserController {
	@Autowired
	private UserService userSer;
	
	@GetMapping
	public List<User> getUsers(){
		return userSer.getUsers();
		
	}
	 @PostMapping("/register")
	    public ResponseEntity<User> registerUser(@RequestBody User user) {
	        User savedUser = userSer.saveUser(user);
	        return ResponseEntity.ok(savedUser);
	    }
	 
	 @PostMapping("/login")
	    public ResponseEntity<String> loginUser(@RequestBody User loginRequest) {
	        // Find the user by email
	        User user = userSer.findByEmail(loginRequest.getEmail());
	        // Validate user password
	        if (user != null && user.getPassword().equals(loginRequest.getPassword())) { // Ensure password is hashed in practice
	            return ResponseEntity.ok("Login successful");
	        }
	        return ResponseEntity.status(401).body("Invalid credentials");
	    }

}
