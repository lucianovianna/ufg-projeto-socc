package com.fullstack.socc.model;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "disciplinas")
public class Disciplina {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;
}
