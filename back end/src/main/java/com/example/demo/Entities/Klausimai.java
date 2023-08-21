package com.example.demo.Entities;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Table;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.util.List;
import java.util.ArrayList;

@Table(name="klausimai")
@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class Klausimai implements Serializable {
    
    @Id
    @Column(name="id")
    private Long id;

    @Column(name = "klausimas")
    private String klausimas;

     @Column(name = "ats1")
    private String ats1;

     @Column(name = "ats2")
    private String ats2;

     @Column(name = "ats3")
    private String ats3;

     @Column(name = "ats4")
    private String ats4;

    @Column(name = "teisingas")
    private String teisingas;

    @ManyToMany(mappedBy = "klausimaiList")
    private List<Atsakymai> atsakymaiList = new ArrayList<>();
    
}
