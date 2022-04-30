package com.mygym.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.mygym.model.Usuarios.Cliente;
import com.mygym.service.ClienteService;

@RestController
@RequestMapping("clientes")
public class ClienteRest {

	// Inyeccion de dependencia
	@Autowired
	private ClienteService clienteService;

	// Metodos de peticion HTTP

	// Get (all)
	@RequestMapping(value = "/{userId}", method = RequestMethod.GET)
	public Optional<Cliente> getById(@PathVariable long userId) {
		return Optional.ofNullable(clienteService.findById(userId));
	}
}
