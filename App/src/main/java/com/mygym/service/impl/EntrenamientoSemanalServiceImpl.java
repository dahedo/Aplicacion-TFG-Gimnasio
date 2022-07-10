package com.mygym.service.impl;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mygym.dao.EntrenamientoSemanalDAO;
import com.mygym.model.entrenamientos.EntrenamientoSemanal;
import com.mygym.service.EntrenamientoSemanalService;

@Service
@Transactional
public class EntrenamientoSemanalServiceImpl implements EntrenamientoSemanalService {

	@Autowired
	private EntrenamientoSemanalDAO dao;

	@Override
	public EntrenamientoSemanal createUpdateEntrenamientoSemanal(EntrenamientoSemanal entrenamientoSemanal) {
		return dao.createUpdateEntrenamientoSemanal(entrenamientoSemanal);
	}

	@Override
	public List<EntrenamientoSemanal> getAllEntrenamientosSemanales() {
		return dao.getAllEntrenamientossemanales();
	}

}
