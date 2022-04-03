package com.mygym.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mygym.dao.DietaDAO;
import com.mygym.model.Dieta;

@RestController
@RequestMapping("dietas")
public class DietaRest {

	// Inyeccion de dependencia
	@Autowired
	private DietaDAO dietaDAO;

	// Metodos de peticion HTTP

	// Get (all)
	@GetMapping("/find-all")
	public List<Dieta> getall() {
		return dietaDAO.findAll();
	}

}
