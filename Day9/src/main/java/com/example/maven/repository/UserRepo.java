package com.example.maven.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.maven.model.User;

@Repository
public interface UserRepo extends JpaRepository<User,Integer>  {
    Optional<User> findByEmail(String username);
}
