package com.example.demo.Services;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entities.Atsakymai;
import com.example.demo.Repositories.AtsakymaiRepo;
@Service

public class AtsakymaiService {
    @Autowired
    AtsakymaiRepo atsakymaiRepo;
    public Atsakymai addAtsakymai(Atsakymai atsakymai) {
        return atsakymaiRepo.save(atsakymai);
    }
}
