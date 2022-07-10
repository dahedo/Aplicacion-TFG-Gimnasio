package com.mygym.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.mygym.model.entrenamientos.EntrenamientoSemanal;
import com.mygym.service.EntrenamientoSemanalService;

@RestController
@RequestMapping("entremaniento-semanal")
public class EntrenamientoSemanalRest {

	// Inyeccion de dependencia
	@Autowired
	private EntrenamientoSemanalService entrenamientoSemanalService;

	// Metodos de peticion HTTP

	@RequestMapping(value = "/create-update", method = RequestMethod.POST)
	public Optional<EntrenamientoSemanal> createUpdateEntrenamientoSemanal(
			@RequestBody EntrenamientoSemanal entrenamientoSemanal) {
		return Optional.ofNullable(entrenamientoSemanalService.createUpdateEntrenamientoSemanal(entrenamientoSemanal));
	}

	@RequestMapping(value = "/get-all", method = RequestMethod.GET)
	public Optional<List<EntrenamientoSemanal>> getAll() {
		return Optional.ofNullable(entrenamientoSemanalService.getAllEntrenamientosSemanales());
	}
}
