package com.fullstack.socc.model;

import jakarta.persistence.*;
import java.time.LocalDate;
import com.fullstack.socc.enums.StatusManifestacao;

@Entity
@Table(name = "manifestacoes_intencoes")
public class ManifestacaoIntencao {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "nc_id", nullable = false)
    private NucleoConhecimento nucleoConhecimento;

    @ManyToOne
    @JoinColumn(name = "docente_id", nullable = false)
    private Docente docente;

    @Column(name = "data_solicitacao", nullable = false)
    private LocalDate dataSolicitacao;

    @Column(columnDefinition = "TEXT")
    private String justificativa;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private StatusManifestacao status;
}
