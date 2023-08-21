package com.example.demo.Entities;

import javax.persistence.Column;
import javax.persistence.Table;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Table(name="atsakymai")
@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class Atsakymai {
    
    @Id
    @GeneratedValue
    @Column(name = "ats_id")
    private Long ats_id;

    @JoinColumn(name = "klaus_id")
    private Long klaus_id;

    @Column(name = "ats")
    private String ats;

    @Column(name="vardas")
    private String vardas;

    @Column(name="taskai")
    private Long taskai;

}

