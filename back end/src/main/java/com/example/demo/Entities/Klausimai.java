package com.example.demo.Entities;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Table;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Table(name="klausimai")
@Entity

public class Klausimai implements Serializable {
    
    @Id
    @Column(name="id")
    private Long id;

    public Long getId(){
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

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

    public String getTeisingas() {
        return teisingas;
    }

    public void setTeisingas(String teisingas) {
        this.teisingas = teisingas;
    }

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

    public String getAts4() {
        return ats4;
    }

    public void setAts4(String ats4) {
        this.ats4 = ats4;
    }

    public String getKlausimas() {
        return klausimas;
    }

    public void setKlausimas(String klausimas) {
        this.klausimas = klausimas;
    }

    public Klausimai(Long id, String klausimas, String ats1, String ats2, String ats3, String ats4, String teisingas) {
        this.id = id;
        this.klausimas = klausimas;
        this.ats1 = ats1;
        this.ats2 = ats2;
        this.ats3 = ats3;
        this.ats4 = ats4;
        this.teisingas = teisingas;
    }
    public Klausimai() {
        super();
    }
}
