package com.fullstack.socc.controller;

import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/manifestacao-intencao")
public class ManifestacaoIntencaoController {

    @PutMapping("/responder/{id}")
    public String responderManifestacaoIntencao(@PathVariable Long id, @RequestBody String resposta) {}
}