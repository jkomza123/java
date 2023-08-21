package com.example.demo.Entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Table;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
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
    
    @Column(name="vardas")
    private String vardas;

    @Column(name = "ats1")
    private String ats1;

     @Column(name = "ats2")
    private String ats2;

     @Column(name = "ats3")
    private String ats3;

     @Column(name = "taskai")
    private int taskai;

    
    @ManyToMany(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JoinTable(name = "klausimai_atsakymai",
    joinColumns = @JoinColumn(name = "ats_id"),
    inverseJoinColumns = @JoinColumn(name = "id")
    ) private List <Klausimai> klausimaiList = new ArrayList<>();
    
}

