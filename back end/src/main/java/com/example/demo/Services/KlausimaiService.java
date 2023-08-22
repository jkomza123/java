package com.example.demo.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entities.Klausimai;
import com.example.demo.Exception.NotFoundException;
import com.example.demo.Repositories.KlausimaiRepo;

@Service
public class KlausimaiService {
    @Autowired
    private final KlausimaiRepo klausimaiRepo;

    public KlausimaiService(KlausimaiRepo klausimaiRepo){
        this.klausimaiRepo = klausimaiRepo;
    }
    
    public List<Klausimai> visiKlausimai(){
        return klausimaiRepo.findAll();
    }

    public Klausimai klausimaiId(Long klaus_id){
        return klausimaiRepo.findById(klaus_id).orElseThrow(() -> new NotFoundException("Klausimas su id "+ klaus_id + " neegzistuoja"));
    }
}