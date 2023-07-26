package com.example.demo.Entities;

import javax.persistence.Column;
import javax.persistence.Table;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Table(name="atsakymai")
@Entity
@Getter
@Setter

public class Atsakymai {
    
    @Id
    @GeneratedValue
    private Integer id;
    
    @Column(name="vardas")
    private String vardas;

    public String getVardas(){
        return vardas;
    }

    public void setVardas(String vardas) {
        this.vardas = vardas;
    }

    @Column(name = "ats1")
    private String ats1;

     @Column(name = "ats2")
    private String ats2;

     @Column(name = "ats3")
    private String ats3;

     @Column(name = "taskai")
    private int taskai;

    public String getAts1() {
        return ats1;
    }

    public void setAts1(String ats1) {
        this.ats1 = ats1;
    }

    public String getAts2() {
        return ats2;
    }

    public void setAts2(String ats2) {
        this.ats2 = ats2;
    }

    public String getAts3() {
        return ats3;
    }

    public void setAts3(String ats3) {
        this.ats3 = ats3;
    }

    public Atsakymai(Integer id, String vardas, String ats1, String ats2, String ats3, int taskai) {
        this.id = id;
        this.vardas = vardas;
        this.ats1 = ats1;
        this.ats2 = ats2;
        this.ats3 = ats3;
        this.taskai = taskai;
    }
    public Atsakymai(){
        super();
    }

    public int getTaskai() {
        return taskai;
    }

    public void setKlausimas(int taskai) {
        this.taskai = taskai;
    }
}