package com.mygym.dao;

import java.util.List;

import com.mygym.model.Dieta;

public interface DietaDAO {

	public Dieta updateDieta(Dieta d);

	public List<Dieta> getAllDietas();

}
