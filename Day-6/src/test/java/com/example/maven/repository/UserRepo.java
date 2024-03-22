package com.example.maven.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.maven.model.User;

public interface UserRepo extends JpaRepository<User,Integer>  {
    
}
.