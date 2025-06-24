package com.fullstack.socc.service;

import com.fullstack.socc.model.NucleoConhecimento;
import com.fullstack.socc.repository.NucleoConhecimentoRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NucleoConhecimentoService {

    private final NucleoConhecimentoRepository repository;

    public NucleoConhecimentoService(NucleoConhecimentoRepository repository) {
        this.repository = repository;
    }

    public List<NucleoConhecimento> getAll() {
        return repository.findAll();
    }

    public NucleoConhecimento getById(Long id) {
        return repository.findById(id).orElse(null);
    }
}
