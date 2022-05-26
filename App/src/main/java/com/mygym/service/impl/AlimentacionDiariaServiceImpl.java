package com.mygym.service.impl;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mygym.dao.AlimentacionDiariaDAO;
import com.mygym.model.AlimentacionDiaria;
import com.mygym.service.AlimentacionDiariaService;

@Service
@Transactional
public class AlimentacionDiariaServiceImpl implements AlimentacionDiariaService {

	@Autowired
	private AlimentacionDiariaDAO dao;

	@Override
	public AlimentacionDiaria createUpdateAlimentacionDiaria(AlimentacionDiaria alimentacionDiaria) {
		AlimentacionDiaria alimentacion = dao.createUpdateAlimentacionDiaria(alimentacionDiaria);
		return alimentacion;
	}
}
