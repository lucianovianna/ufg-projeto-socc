package com.fullstack.socc.controller;

import com.fullstack.socc.model.NucleoConhecimento;
import com.fullstack.socc.service.NucleoConhecimentoService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/nucleo-conhecimento")
public class NucleoConhecimentoController {

    private final NucleoConhecimentoService service;

    public NucleoConhecimentoController(NucleoConhecimentoService service) {
        this.service = service;
    }

    @GetMapping("/get-all")
    public List<NucleoConhecimento> getAll() {
        return service.getAll();
    }

    @GetMapping("/get-by-id/{id}")
    public NucleoConhecimento getById(@PathVariable Long id) {
        return service.getById(id);
    }
}
