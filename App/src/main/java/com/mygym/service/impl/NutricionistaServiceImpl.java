package com.mygym.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mygym.dao.NutricionistaDAO;
import com.mygym.model.Usuarios.Nutricionista;
import com.mygym.service.NutricionistaService;

@Service
public class NutricionistaServiceImpl implements NutricionistaService {

	@Autowired
	private NutricionistaDAO nutricionistaDao;

	@Override
	public Nutricionista findById(long id) {
		Nutricionista nutricionista = nutricionistaDao.findById(id);
		return nutricionista;
	}

}
