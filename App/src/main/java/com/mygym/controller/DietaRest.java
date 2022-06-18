package com.mygym.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.mygym.model.nutricion.Dieta;
import com.mygym.service.DietaService;

@RestController
@RequestMapping("dietas")
public class DietaRest {

	// Inyeccion de dependencia
	@Autowired
	private DietaService dietaService;

	// Metodos de peticion HTTP

	@RequestMapping(value = "/create-update", method = RequestMethod.POST)
	public Optional<Dieta> createUpdateDieta(@RequestBody Dieta dieta) {

		return Optional.ofNullable(dietaService.updateDieta(dieta));
	}

	@RequestMapping(value = "/get-all", method = RequestMethod.GET)
	public Optional<List<Dieta>> getAll() {
		return Optional.ofNullable(dietaService.getAllDietas());
	}
}
