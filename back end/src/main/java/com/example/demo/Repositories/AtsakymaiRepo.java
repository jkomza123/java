package com.example.demo.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Entities.Atsakymai;

public interface AtsakymaiRepo extends JpaRepository<Atsakymai, Integer> {
}

