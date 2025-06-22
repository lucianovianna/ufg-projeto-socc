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


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Area getArea() {
        return area;
    }

    public void setArea(Area area) {
        this.area = area;
    }

    public Set<Docente> getDocentes() {
        return docentes;
    }

    public void setDocentes(Set<Docente> docentes) {
        this.docentes = docentes;
    }

    public Docente getFacilitador() {
        return facilitador;
    }

    public void setFacilitador(Docente facilitador) {
        this.facilitador = facilitador;
    }

    public Set<Disciplina> getDisciplinas() {
        return disciplinas;
    }

    public void setDisciplinas(Set<Disciplina> disciplinas) {
        this.disciplinas = disciplinas;
    }
}
