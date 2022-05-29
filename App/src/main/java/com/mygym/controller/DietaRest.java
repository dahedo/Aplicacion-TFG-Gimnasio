package com.mygym.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.mygym.model.Dieta;
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
		System.out.println(dieta.getNombre());

		return Optional.ofNullable(dietaService.updateDieta(dieta));
	}

}
