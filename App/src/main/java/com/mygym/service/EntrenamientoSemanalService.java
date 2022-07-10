package com.mygym.service;

import java.util.List;

import com.mygym.model.entrenamientos.EntrenamientoSemanal;

public interface EntrenamientoSemanalService {

	public EntrenamientoSemanal createUpdateEntrenamientoSemanal(EntrenamientoSemanal entrenamientoSemanal);

	public List<EntrenamientoSemanal> getAllEntrenamientosSemanales();
}
