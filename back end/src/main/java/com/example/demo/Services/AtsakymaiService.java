package com.example.demo.Services;
import org.springframework.stereotype.Service;

import com.example.demo.Entities.Atsakymai;
@Service

public interface AtsakymaiService {
    public Atsakymai addAtsakymai(Atsakymai atsakymai);
}
