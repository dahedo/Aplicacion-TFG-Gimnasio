package com.mygym.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mygym.dao.EntrenamientoDAO;
import com.mygym.model.Entrenamiento;

@RestController
@RequestMapping("entremanientos")
public class EntrenamientoRest {

	// Inyeccion de dependencia
	@Autowired
	private EntrenamientoDAO entrenamientoDAO;

	// Metodos de peticion HTTP

	// Get (all)
	@GetMapping("/find-all")
	public List<Entrenamiento> getall() {
		return entrenamientoDAO.findAll();
	}
}
