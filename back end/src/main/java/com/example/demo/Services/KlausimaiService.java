package com.example.demo.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entities.Klausimai;
import com.example.demo.Exception.NotFoundException;
import com.example.demo.Repositories.KlausimaiRepo;

@Service
public class KlausimaiService {
    private final KlausimaiRepo klausimaiRepo;

    public KlausimaiService(KlausimaiRepo klausimaiRepo){
        this.klausimaiRepo = klausimaiRepo;
    }

    @Autowired
    public List<Klausimai> visiKlausimai(){
        return klausimaiRepo.findAll();
    }
    
    public Klausimai klausimaiId(Long id){
        return klausimaiRepo.findById(id).orElseThrow(() -> new NotFoundException("Klausimas su id "+ id + " neegzistuoja"));
    }
}