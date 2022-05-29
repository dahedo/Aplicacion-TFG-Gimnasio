package com.mygym.service.impl;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mygym.dao.AlimentacionDiariaDietaDAO;
import com.mygym.model.AlimentacionDiariaDieta;
import com.mygym.service.AlimentacionDiariaDietaService;

@Service
@Transactional
public class AlimentacionDiariaDietaServiceImpl implements AlimentacionDiariaDietaService {

	@Autowired
	private AlimentacionDiariaDietaDAO dao;

	@Override
	public AlimentacionDiariaDieta createUpdateAlimentacionDiaria(AlimentacionDiariaDieta alimentacionDiariaDieta) {

		return dao.createUpdateAlimentacionDiaria(alimentacionDiariaDieta);
	}

}
