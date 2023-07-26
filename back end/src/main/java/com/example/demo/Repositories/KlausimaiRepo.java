package com.example.demo.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Entities.Klausimai;

public interface KlausimaiRepo extends JpaRepository<Klausimai, Long> {
}
