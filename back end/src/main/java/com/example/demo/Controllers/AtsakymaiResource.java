package com.example.demo.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entities.Atsakymai;
import com.example.demo.Services.AtsakymaiService;

@RestController
public class AtsakymaiResource {
    @Autowired
    AtsakymaiService atsakymaiservice;
    @PostMapping("/atsakymai/addatsakymas")
    public Atsakymai addAtsakymai (@RequestBody Atsakymai atsakymai){
        return atsakymaiservice.addAtsakymai(atsakymai);
    }
}