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

   
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public NucleoConhecimento getNucleoConhecimento() {
        return nucleoConhecimento;
    }

    public void setNucleoConhecimento(NucleoConhecimento nucleoConhecimento) {
        this.nucleoConhecimento = nucleoConhecimento;
    }

    public Docente getDocente() {
        return docente;
    }

    public void setDocente(Docente docente) {
        this.docente = docente;
    }

    public LocalDate getDataSolicitacao() {
        return dataSolicitacao;
    }

    public void setDataSolicitacao(LocalDate dataSolicitacao) {
        this.dataSolicitacao = dataSolicitacao;
    }

    public String getJustificativa() {
        return justificativa;
    }

    public void setJustificativa(String justificativa) {
        this.justificativa = justificativa;
    }

    public StatusManifestacao getStatus() {
        return status;
    }

    public void setStatus(StatusManifestacao status) {
        this.status = status;
    }
}
