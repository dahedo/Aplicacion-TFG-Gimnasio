package com.mygym.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.mygym.model.AlimentacionDiariaDieta;
import com.mygym.service.AlimentacionDiariaDietaService;

@RestController
@RequestMapping("alimentacion-diaria-dieta")
public class AlimentacionDiariaDietaRest {

	@Autowired
	AlimentacionDiariaDietaService service;

	@RequestMapping(value = "/create-update-alimentacion", method = RequestMethod.POST)
	public Optional<AlimentacionDiariaDieta> createUpdateAlimentacion(
			@RequestBody AlimentacionDiariaDieta alimentacionDiariaDieta) {

		return Optional.ofNullable(service.createUpdateAlimentacionDiaria(alimentacionDiariaDieta));
	}

}
