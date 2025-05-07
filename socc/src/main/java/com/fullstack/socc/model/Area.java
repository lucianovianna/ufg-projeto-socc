package com.fullstack.socc.model;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "areas")
public class Area {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;
}