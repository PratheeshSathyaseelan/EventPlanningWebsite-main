package com.example.maven.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.maven.model.Payment;

@Repository
public interface PaymentRepo extends JpaRepository<Payment,Integer>{
    
}
