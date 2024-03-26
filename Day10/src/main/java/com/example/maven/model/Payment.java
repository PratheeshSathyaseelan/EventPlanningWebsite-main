package com.example.maven.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="payment")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Payment {
    @Id
    private int id;
    private int userid;
    private String amount;
    private String paymentmethod;
    private String paiddate;
}
