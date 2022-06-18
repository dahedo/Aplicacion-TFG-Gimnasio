package com.mygym.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mygym.dao.EntrenadorDAO;
import com.mygym.model.usuarios.Entrenador;
import com.mygym.service.EntrenadorService;

@Service
public class EntrenadorServiceImpl implements EntrenadorService {

	@Autowired
	private EntrenadorDAO entrenadorDAO;

	@Override
	public Entrenador findById(long id) {
		Entrenador entrenador = entrenadorDAO.findById(id);
		return entrenador;
	}

}
