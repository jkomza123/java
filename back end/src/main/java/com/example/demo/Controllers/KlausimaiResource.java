package com.example.demo.Controllers;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entities.Klausimai;
import com.example.demo.Services.KlausimaiService;

@CrossOrigin
@RestController
@RequestMapping("/klausimai")
public class KlausimaiResource {
    private final KlausimaiService klausimaiService;

    public KlausimaiResource(KlausimaiService klausimaiService){
        this.klausimaiService = klausimaiService;
    }
    @GetMapping("/all")
    public ResponseEntity<List<Klausimai>> VisiKlausimai(){
        List<Klausimai> klausimai = klausimaiService.visiKlausimai();
        return new ResponseEntity<>(klausimai, HttpStatus.OK);
    }
    @GetMapping("/{id}")
    public ResponseEntity<Klausimai> KlausimaiId (@PathVariable("id") Long id){
        Klausimai klausimai = klausimaiService.klausimaiId(id);
        return new ResponseEntity<>(klausimai, HttpStatus.OK);
    }
}
