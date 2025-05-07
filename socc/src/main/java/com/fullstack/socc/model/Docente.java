package com.fullstack.socc.model;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "docentes")
public class Docente {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;
}
