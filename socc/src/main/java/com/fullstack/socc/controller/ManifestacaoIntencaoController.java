package com.fullstack.socc.controller;

import com.fullstack.socc.service.ManifestacaoIntencaoService;
import com.fullstack.socc.enums.StatusManifestacao;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/manifestacao-intencao")
public class ManifestacaoIntencaoController {

    private final ManifestacaoIntencaoService service;

    public ManifestacaoIntencaoController(ManifestacaoIntencaoService service) {
        this.service = service;
    }

    @PutMapping("/responder/{id}")
    public String responderManifestacaoIntencao(@PathVariable Long id, @RequestBody String resposta) {
        StatusManifestacao status;
        try {
            status = StatusManifestacao.valueOf(resposta.toUpperCase());
        } catch (IllegalArgumentException e) {
            return "Status inválido: " + resposta + ". Valores aceitos: SOLICITADO, ACEITO, NEGADO.";
        }

        service.responder(id, status);
        return "Manifestação respondida com status: " + status;
    }
}
