package com.fullstack.socc.config;

import com.fullstack.socc.model.*;
import com.fullstack.socc.repository.*;
import com.fullstack.socc.enums.StatusManifestacao;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDate;

@Component
public class DatabaseSeeder implements CommandLineRunner {

    private final NucleoConhecimentoRepository nucleoRepository;
    private final AreaRepository areaRepository;
    private final DocenteRepository docenteRepository;
    private final DisciplinaRepository disciplinaRepository;
    private final ManifestacaoIntencaoRepository manifestacaoRepository;

    public DatabaseSeeder(
        NucleoConhecimentoRepository nucleoRepository,
        AreaRepository areaRepository,
        DocenteRepository docenteRepository,
        DisciplinaRepository disciplinaRepository,
        ManifestacaoIntencaoRepository manifestacaoRepository
    ) {
        this.nucleoRepository = nucleoRepository;
        this.areaRepository = areaRepository;
        this.docenteRepository = docenteRepository;
        this.disciplinaRepository = disciplinaRepository;
        this.manifestacaoRepository = manifestacaoRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        if (nucleoRepository.count() == 0) {
            Area area = new Area();
            area.setNome("Ciência da Computação");
            area = areaRepository.save(area);

            Docente docente = new Docente();
            docente.setNome("João Docente");
            docente = docenteRepository.save(docente);

            Disciplina disciplina = new Disciplina();
            disciplina.setNome("Algoritmos");
            disciplina = disciplinaRepository.save(disciplina);

            NucleoConhecimento nucleo = new NucleoConhecimento();
            nucleo.setNome("Núcleo de Lógica");
            nucleo.setArea(area);
            nucleo.setFacilitador(docente);
            nucleo = nucleoRepository.save(nucleo);

            ManifestacaoIntencao manifestacao = new ManifestacaoIntencao();
            manifestacao.setNucleoConhecimento(nucleo);
            manifestacao.setDocente(docente);
            manifestacao.setDataSolicitacao(LocalDate.now());
            manifestacao.setJustificativa("Interesse em participar do núcleo.");
            manifestacao.setStatus(StatusManifestacao.SOLICITADO);
            manifestacaoRepository.save(manifestacao);
        }
    }
}