package com.mygym.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.mygym.model.Usuarios.Entrenador;
import com.mygym.service.EntrenadorService;

@RestController
@RequestMapping("entrenador")
public class EntrenadorRest {

	// Inyeccion de dependencia
	@Autowired
	private EntrenadorService entrenadorService;

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public Optional<Entrenador> getById(@PathVariable long id) {
		return Optional.ofNullable(entrenadorService.findById(id));
	}

}
