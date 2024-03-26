package com.example.maven.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.maven.model.NewEvent;

@Repository
public interface NewEventRepo extends JpaRepository <NewEvent,Integer> {
    
}
