package com.fullstack.socc.repository;

import com.fullstack.socc.model.ManifestacaoIntencao;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ManifestacaoIntencaoRepository extends JpaRepository<ManifestacaoIntencao, Long> {
}