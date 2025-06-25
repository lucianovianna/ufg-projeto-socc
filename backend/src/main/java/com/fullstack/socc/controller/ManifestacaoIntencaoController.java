package com.fullstack.socc.controller;


import com.fullstack.socc.service.ManifestacaoIntencaoService;
import com.fullstack.socc.controller.requestBodyForms.*;
import com.fullstack.socc.enums.StatusManifestacao;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/manifestacao-intencao")
public class ManifestacaoIntencaoController {

    private final ManifestacaoIntencaoService service;

    public ManifestacaoIntencaoController(ManifestacaoIntencaoService service) {
        this.service = service;
    }

    @PatchMapping("/responder/{id}")
    public String responderManifestacaoIntencao(
        @PathVariable Long id,
        @RequestBody RespostaManifestacaoForm body
    ) {
        String resposta = body.status;
        StatusManifestacao status;
        try {
            status = StatusManifestacao.valueOf(resposta.toUpperCase());
        } catch (IllegalArgumentException | NullPointerException e) {
            return "Status inválido: " + resposta + ". Valores aceitos: SOLICITADO, ACEITO, NEGADO.";
        }
        
        service.responder(id, status);

        return "Manifestação respondida com status: " + status;
    }
}