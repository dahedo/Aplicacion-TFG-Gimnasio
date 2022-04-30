package com.mygym.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.mygym.model.Usuarios.Nutricionista;
import com.mygym.service.NutricionistaService;

@RestController
@RequestMapping("nutricionista")
public class NutricionistaRest {

	// Inyeccion de dependencia
	@Autowired
	private NutricionistaService nutricionistaService;

	// Metodos de peticion HTTP

	// Get (all)
	@RequestMapping(value = "/{userId}", method = RequestMethod.GET)
	public Nutricionista getById(@PathVariable long userId) {
		Nutricionista n = nutricionistaService.findById(userId);
		if (n != null) {
			return n;
		}
		return null;
	}
}
