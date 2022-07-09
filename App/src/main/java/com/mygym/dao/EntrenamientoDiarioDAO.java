package com.mygym.dao;

import java.util.List;

import com.mygym.model.entrenamientos.EntrenamientoDiario;

public interface EntrenamientoDiarioDAO {

	public EntrenamientoDiario createUpdateEntrenamientoDiario(EntrenamientoDiario entrenamientoDiario);

	public List<EntrenamientoDiario> getAllEntrenamientosDiarios();
}
