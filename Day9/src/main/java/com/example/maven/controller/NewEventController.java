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

import com.example.maven.model.NewEvent;
import com.example.maven.service.NewEventService;


@RestController
@RequestMapping("/api/event")
public class NewEventController {
    @Autowired
	public NewEventService detailserver;

    @PostMapping("/posting")
	public String saveAll(@NonNull @RequestBody NewEvent story)
	{
		return detailserver.saveBooks(story);
	}
	
	@GetMapping("/getstorydetails")
	public List<NewEvent> getstorydetails(){
		return detailserver.getstorydetails();
	}
	
	@GetMapping("/getstorydetailsbyid/{id}")
	public Optional<NewEvent> getuserByID(@PathVariable int id){
		return detailserver.getuserByID(id);
	}
	
	@PutMapping("/putstorydetails/{id}")
	public void putDetails(@PathVariable int id,@RequestBody NewEvent sd) {
		sd.setId(id);
		detailserver.putDetails(sd);
	}
	
	@DeleteMapping("/deletestorydetails/{id}")
	public void deleteByID(@PathVariable int id) {
		detailserver.deleteByID(id);
	}

}
