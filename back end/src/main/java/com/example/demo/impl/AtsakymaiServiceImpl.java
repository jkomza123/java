package com.example.demo.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entities.Atsakymai;
import com.example.demo.Repositories.AtsakymaiRepo;
import com.example.demo.Services.AtsakymaiService;

@Service
public class AtsakymaiServiceImpl implements AtsakymaiService {
    @Autowired
    AtsakymaiRepo atsakymaiRepo;
    @Override
    public Atsakymai addAtsakymai(Atsakymai atsakymai) {
        return atsakymaiRepo.save(atsakymai);
    }
    
}
