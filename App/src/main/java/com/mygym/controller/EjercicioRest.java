package com.mygym.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mygym.dao.EjercicioDAO;
import com.mygym.model.entrenamientos.Ejercicio;

@RestController
@RequestMapping("ejercicios")
public class EjercicioRest {

	// Inyeccion de dependencia
	@Autowired
	private EjercicioDAO ejercicioDAO;

	// Metodos de peticion HTTP

	// Get (all)
	@GetMapping("/get-all")
	public List<Ejercicio> getall() {
		return ejercicioDAO.findAll();
	}

}
