package com.mygym.service;

import java.util.List;

import com.mygym.model.nutricion.Dieta;

public interface DietaService {
	public Dieta updateDieta(Dieta d);

	public List<Dieta> getAllDietas();
}
