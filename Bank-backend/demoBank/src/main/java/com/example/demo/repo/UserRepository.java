package com.example.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.pojo.User;
@Repository
public interface UserRepository extends JpaRepository<User, Integer>{

	User findByEmail(String email);

}
