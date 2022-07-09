package com.mygym.service.impl;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mygym.dao.EntrenamientoDiarioDAO;
import com.mygym.model.entrenamientos.EntrenamientoDiario;
import com.mygym.service.EntrenamientoDiarioService;

@Service
@Transactional
public class EntrenamientoDiarioServiceImpl implements EntrenamientoDiarioService {

	@Autowired
	private EntrenamientoDiarioDAO dao;

	@Override
	public EntrenamientoDiario createUpdateEntrenamientoDiario(EntrenamientoDiario entrenamientoDiario) {

		return dao.createUpdateEntrenamientoDiario(entrenamientoDiario);
	}

	@Override
	public List<EntrenamientoDiario> getAllEntrenamientosDiarios() {
		return dao.getAllEntrenamientosDiarios();
	}

}
