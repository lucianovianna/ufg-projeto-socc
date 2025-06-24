package com.fullstack.socc.config;

import com.fullstack.socc.model.*;
import com.fullstack.socc.repository.*;
import com.fullstack.socc.enums.StatusManifestacao;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.util.*;

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
            List<Area> areas = criarAreas();
            List<Docente> docentes = criarDocentes();
            List<Disciplina> disciplinas = criarDisciplinas();
            List<NucleoConhecimento> nucleos = criarNucleos(areas, docentes, disciplinas);
            criarManifestacoes(nucleos, docentes);
        }
    }

    private List<Area> criarAreas() {
        String[] nomes = {
            "Ciência da Computação", "Engenharia Elétrica", "Matemática", "Física"
        };
        List<Area> areas = new ArrayList<>();
        for (String nome : nomes) {
            Area area = new Area();
            area.setNome(nome);
            areas.add(areaRepository.save(area));
        }
        return areas;
    }

    private List<Docente> criarDocentes() {
        String[] nomes = {
            "Ana Souza", "Bruno Lima", "Carlos Silva", "Daniela Castro", "Eduardo Alves",
            "Fernanda Rocha", "Gabriel Martins", "Helena Dias", "Igor Pereira", "Juliana Costa",
            "Kleber Ramos", "Larissa Melo", "Marcos Teixeira", "Natália Gomes", "Otávio Barbosa",
            "Patrícia Fernandes", "Rafael Cardoso", "Simone Azevedo", "Thiago Moreira", "Vanessa Oliveira",
            "Lucas Monteiro", "Amanda Ribeiro", "Pedro Henrique", "Camila Duarte", "Felipe Batista",
            "Tatiane Lopes", "Ricardo Farias", "Beatriz Cunha", "Vinícius Mendes", "Sabrina Torres",
            "Rodrigo Pires", "Letícia Nunes", "André Barbosa", "Marina Freitas", "Gustavo Rezende",
            "Aline Martins", "Murilo Antunes", "Paula Silveira", "Fábio Santana", "Bianca Prado",
            "João Victor", "Larissa Carvalho", "Renato Borges", "Priscila Souza", "Diego Almeida",
            "Carolina Tavares", "Leonardo Rocha", "Sueli Castro", "Vitor Hugo", "Michele Andrade"
        };
        List<Docente> docentes = new ArrayList<>();
        for (String nome : nomes) {
            Docente docente = new Docente();
            docente.setNome(nome);
            docentes.add(docenteRepository.save(docente));
        }
        return docentes;
    }

    private List<Disciplina> criarDisciplinas() {
        String[] nomes = {
            "Algoritmos", "Estruturas de Dados", "Banco de Dados", "Redes de Computadores", "Sistemas Operacionais",
            "Engenharia de Software", "Inteligência Artificial", "Cálculo I", "Cálculo II", "Álgebra Linear",
            "Probabilidade", "Física Geral", "Química Geral", "Eletromagnetismo", "Geometria Analítica",
            "Lógica Matemática", "Programação Orientada a Objetos", "Compiladores", "Teoria da Computação", "Sistemas Digitais"
        };
        List<Disciplina> disciplinas = new ArrayList<>();
        for (String nome : nomes) {
            Disciplina disciplina = new Disciplina();
            disciplina.setNome(nome);
            disciplinas.add(disciplinaRepository.save(disciplina));
        }
        return disciplinas;
    }

    private List<NucleoConhecimento> criarNucleos(List<Area> areas, List<Docente> docentes, List<Disciplina> disciplinas) {
        String[] nomes = {
            "Núcleo de Lógica", "Núcleo de Sistemas", "Núcleo de Matemática", "Núcleo de Física"
        };
        List<NucleoConhecimento> nucleos = new ArrayList<>();
        int docentesPorNucleo = 4;
        int disciplinasPorNucleo = 5;
        for (int i = 0; i < nomes.length; i++) {
            NucleoConhecimento nucleo = new NucleoConhecimento();
            nucleo.setNome(nomes[i]);
            nucleo.setArea(areas.get(i % areas.size()));
            // Facilitador é o primeiro docente do bloco de 10
            Docente facilitador = docentes.get(i * docentesPorNucleo);
            nucleo.setFacilitador(facilitador);

            // Adiciona docentes diferentes em cada núcleo (não inclui o facilitador nas manifestações)
            Set<Docente> docentesNucleo = new HashSet<>(docentes.subList(i * docentesPorNucleo, (i + 1) * docentesPorNucleo));
            nucleo.setDocentes(docentesNucleo);

            // Adiciona 5 disciplinas diferentes em cada núcleo
            Set<Disciplina> disciplinasNucleo = new HashSet<>(disciplinas.subList(i * disciplinasPorNucleo, (i + 1) * disciplinasPorNucleo));
            nucleo.setDisciplinas(disciplinasNucleo);

            nucleos.add(nucleoRepository.save(nucleo));
        }
        return nucleos;
    }

    private void criarManifestacoes(List<NucleoConhecimento> nucleos, List<Docente> docentes) {
        int manifestacoesPorNucleo = 5;
        int totalDocentes = docentes.size();
        
        // Usar os últimos docentes para as manifestações, garantindo que não são facilitadores nem docentes já do núcleo
        int startIndex = totalDocentes - (manifestacoesPorNucleo * nucleos.size());
        int docenteIndex = startIndex;

        for (NucleoConhecimento nucleo : nucleos) {
            for (int i = 0; i < manifestacoesPorNucleo; i++) {
                Docente solicitante = docentes.get(docenteIndex++);
                ManifestacaoIntencao manifestacao = new ManifestacaoIntencao();
                manifestacao.setNucleoConhecimento(nucleo);
                manifestacao.setDocente(solicitante);
                manifestacao.setDataSolicitacao(LocalDate.now().minusDays(i));
                manifestacao.setJustificativa("Interesse em participar do núcleo " + nucleo.getNome() + ".");
                manifestacao.setStatus(StatusManifestacao.SOLICITADO);
                manifestacaoRepository.save(manifestacao);
            }
        }
    }
}