package com.mygym.dao;

import java.util.List;

import com.mygym.model.entrenamientos.EntrenamientoSemanal;

public interface EntrenamientoSemanalDAO {

	public EntrenamientoSemanal createUpdateEntrenamientoSemanal(EntrenamientoSemanal entrenamientoSemanal);

	public List<EntrenamientoSemanal> getAllEntrenamientossemanales();
}
