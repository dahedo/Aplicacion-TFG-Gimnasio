package com.mygym.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.mygym.model.AlimentacionDiaria;
import com.mygym.service.AlimentacionDiariaService;

@RestController
@RequestMapping("alimentacion-diaria")
public class AlimentacionDiariaRest {

	// Inyeccion de dependencia
	@Autowired
	private AlimentacionDiariaService alimentacionDiariaService;

	@RequestMapping(value = "/create-update-alimentacion", method = RequestMethod.POST)
	public Optional<AlimentacionDiaria> createUpdateAlimentacion(@RequestBody AlimentacionDiaria alimentacionDiaria) {

		return Optional.ofNullable(alimentacionDiariaService.createUpdateAlimentacionDiaria(alimentacionDiaria));
	}
}
