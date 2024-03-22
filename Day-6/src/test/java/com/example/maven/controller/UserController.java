package com.example.maven.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.maven.model.User;
import com.example.maven.service.UserService;

import io.micrometer.common.lang.NonNull;

@RestController
@RequestMapping("/api/users") //used for additional data to be showed in the url

public class UserController {
     @Autowired
    private UserService userService;

    //creating a data
    @PostMapping("/createUser")
    public ResponseEntity<User> createUser(@NonNull @RequestBody User user){
        User createdUser = userService.createUser(user);
        return new ResponseEntity<>(createdUser, HttpStatus.CREATED);
    }
}
.