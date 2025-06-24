package com.fullstack.socc.service;

import com.fullstack.socc.model.ManifestacaoIntencao;
import com.fullstack.socc.model.NucleoConhecimento;
import com.fullstack.socc.model.Docente;
import com.fullstack.socc.enums.StatusManifestacao;
import com.fullstack.socc.repository.ManifestacaoIntencaoRepository;
import com.fullstack.socc.repository.NucleoConhecimentoRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ManifestacaoIntencaoService {

    private final ManifestacaoIntencaoRepository repository;
    private final NucleoConhecimentoRepository nucleoConhecimentoRepository;


    public ManifestacaoIntencaoService(
        ManifestacaoIntencaoRepository repository,
        NucleoConhecimentoRepository nucleoConhecimentoRepository
    ) {
        this.repository = repository;
        this.nucleoConhecimentoRepository = nucleoConhecimentoRepository;
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

        // Se aceito, adiciona o docente ao núcleo e salva o núcleo
        if (status == StatusManifestacao.ACEITO) {
            NucleoConhecimento nucleo = manifestacao.getNucleoConhecimento();
            Docente docente = manifestacao.getDocente();
            nucleo.getDocentes().add(docente);
            nucleoConhecimentoRepository.save(nucleo);
        }

        manifestacao.setStatus(status);

        return repository.save(manifestacao);
    }
}
