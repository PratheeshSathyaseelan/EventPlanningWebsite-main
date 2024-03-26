package com.example.maven.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.maven.model.Payment;
import com.example.maven.service.PaymentService;


@RestController
@RequestMapping("/api/payment")
public class PaymentController {
     @Autowired
	public PaymentService payment;

    @PostMapping("/paymentposting")
	public String saveAll(@NonNull @RequestBody Payment money)
	{
		return payment.saveBooks(money);
	}
	
	@GetMapping("/getpayment")
	public List<Payment> getpayment(){
		return payment.getpayment();
	}
	
	@GetMapping("/getpaymentbyid/{id}")
	public Optional<Payment> getuserByID(@PathVariable int id){
		return payment.getuserByID(id);
	}
	
	@PutMapping("/putpayment/{id}")
	public void putDetails(@PathVariable int id,@RequestBody Payment sd) {
		sd.setId(id);
		payment.putDetails(sd);
	}
	
	@DeleteMapping("/deletepayment/{id}")
	public void deleteByID(@PathVariable int id) {
		payment.deleteByID(id);
	}

}
