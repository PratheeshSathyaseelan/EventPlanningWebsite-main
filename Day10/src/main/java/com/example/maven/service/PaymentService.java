package com.example.maven.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Service;

import com.example.maven.model.Payment;
import com.example.maven.repository.PaymentRepo;

@Service
public class PaymentService {

    @Autowired
    public PaymentRepo pay;

    public List<Payment> getpayment(){
		return pay.findAll();
	}
	
	public Optional<Payment> getuserByID(int id){
		return pay.findById(id);
	}
	
	public Payment putDetails(@NonNull Payment paymentstatus) {
		return pay.save(paymentstatus);
	}
	public String saveBooks(@NonNull Payment amount)
	  {
        pay.save(amount);
		   return "Thanks for Booking";
	  }

	public void deleteByID(int id) {
		pay.deleteById(id);
	}
    
}