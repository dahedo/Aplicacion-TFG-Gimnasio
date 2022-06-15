package com.mygym.service.impl;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mygym.dao.DietaDAO;
import com.mygym.model.Dieta;
import com.mygym.service.DietaService;

@Service
@Transactional
public class DietaServiceImpl implements DietaService {

	@Autowired
	private DietaDAO dao;

	@Override
	public Dieta updateDieta(Dieta d) {
		return dao.updateDieta(d);
	}

	@Override
	public List<Dieta> getAllDietas() {

		return dao.getAllDietas();
	}

}
