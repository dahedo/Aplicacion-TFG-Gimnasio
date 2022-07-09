package com.mygym.service;

import java.util.List;

import com.mygym.model.entrenamientos.EntrenamientoDiario;

public interface EntrenamientoDiarioService {
	public EntrenamientoDiario createUpdateEntrenamientoDiario(EntrenamientoDiario entrenamientoDiario);

	public List<EntrenamientoDiario> getAllEntrenamientosDiarios();

}
