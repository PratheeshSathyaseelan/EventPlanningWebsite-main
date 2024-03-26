package com.example.maven.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.maven.model.Booking;
import com.example.maven.service.BookingService;


@RestController
@RequestMapping("/api/booking")
public class BookingController {
    @Autowired
	public BookingService bookcontrol;
	
	@GetMapping("/getbookingstatus")
	public List<Booking> getbookingstatus(){
		return bookcontrol.getbookingstatus();
	}
	
	@GetMapping("/getbookingstatusbyid/{id}")
	public Optional<Booking> getuserByID(@PathVariable int id){
		return bookcontrol.getuserByID(id);
	}
	
	@PutMapping("/putbookingstatus/{id}")
	public void putDetails(@PathVariable int id,@RequestBody Booking sdm) {
		sdm.setId(id);
		bookcontrol.putDetails(sdm);
	}
	
	@DeleteMapping("/deletebookingstatus/{id}")
	public void deleteByID(@PathVariable int id) {
		bookcontrol.deleteByID(id);
	}

}
