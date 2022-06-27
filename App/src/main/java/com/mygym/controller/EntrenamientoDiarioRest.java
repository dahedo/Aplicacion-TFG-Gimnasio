package com.mygym.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.mygym.model.entrenamientos.EntrenamientoDiario;
import com.mygym.service.EntrenamientoDiarioService;

@RestController
@RequestMapping("entremaniento-diario")
public class EntrenamientoDiarioRest {

	// Inyeccion de dependencia
	@Autowired
	private EntrenamientoDiarioService entrenamientoDiarioService;

	// Metodos de peticion HTTP

	@RequestMapping(value = "/create-update", method = RequestMethod.POST)
	public Optional<EntrenamientoDiario> createUpdateDieta(@RequestBody EntrenamientoDiario entrenamientoDiario) {
		return Optional.ofNullable(entrenamientoDiarioService.createUpdateEntrenamientoDiario(entrenamientoDiario));
	}
}
