package com.fullstack.socc.repository;

import com.fullstack.socc.model.NucleoConhecimento;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NucleoConhecimentoRepository extends JpaRepository<NucleoConhecimento, Long> {
}