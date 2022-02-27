package com.mygym.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mygym.dao.ComidaDAO;
import com.mygym.model.Comida;

@RestController
@RequestMapping("comidas")
public class ComidaRest {

	// Inyeccion de dependencia
	@Autowired
	private ComidaDAO comidaDAO;

	// Metodos de peticion HTTP

	// Get (all)
	@GetMapping("/find-all")
	public List<Comida> getall() {
		return comidaDAO.findAll();
	}

}
