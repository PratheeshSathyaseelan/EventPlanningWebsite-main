package com.example.maven.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="addnewevent")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class NewEvent {
     @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private int id;
    private String eventtype;
    private String description;
    private String totalpackage;
    private String participantcount;
    private String charges;
    
}
