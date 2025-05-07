package com.fullstack.socc.model;

import jakarta.persistence.*;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "nucleos_conhecimentos")
public class NucleoConhecimento {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;

    @ManyToOne
    @JoinColumn(name = "area_id", nullable = false)
    private Area area;

    @ManyToMany
    @JoinTable(
        name = "nucleos_conhecimentos_docentes",
        joinColumns = @JoinColumn(name = "nc_id"),
        inverseJoinColumns = @JoinColumn(name = "docente_id")
    )
    private Set<Docente> docentes = new HashSet<>();

    @ManyToOne
    @JoinColumn(name = "docente_facilitador_id", nullable = false)
    private Docente facilitador;

    @ManyToMany
    @JoinTable(
        name = "nucleos_conhecimentos_disciplinas",
        joinColumns = @JoinColumn(name = "nc_id"),
        inverseJoinColumns = @JoinColumn(name = "disciplina_id")
    )
    private Set<Disciplina> disciplinas = new HashSet<>();
}
