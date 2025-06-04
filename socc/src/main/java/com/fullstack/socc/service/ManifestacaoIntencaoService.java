package com.fullstack.socc.service;

import com.fullstack.socc.model.ManifestacaoIntencao;
import com.fullstack.socc.enums.StatusManifestacao;
import com.fullstack.socc.repository.ManifestacaoIntencaoRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ManifestacaoIntencaoService {

    private final ManifestacaoIntencaoRepository repository;

    public ManifestacaoIntencaoService(ManifestacaoIntencaoRepository repository) {
        this.repository = repository;
    }

    public List<ManifestacaoIntencao> getAll() {
        return repository.findAll();
    }

    public Optional<ManifestacaoIntencao> findById(Long id) {
        return repository.findById(id);
    }

    public ManifestacaoIntencao save(ManifestacaoIntencao manifestacaoIntencao) {
        return repository.save(manifestacaoIntencao);
    }

    public ManifestacaoIntencao responder(Long id, StatusManifestacao status) {
        ManifestacaoIntencao manifestacao = repository.findById(id)
            .orElseThrow(() -> new RuntimeException("Manifestação não encontrada com id: " + id));

        manifestacao.setStatus(status);
        return repository.save(manifestacao);
    }
}
