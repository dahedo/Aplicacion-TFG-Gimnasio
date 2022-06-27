package com.mygym.dao.impl;

import javax.persistence.EntityManager;

import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.mygym.dao.EntrenamientoDiarioDAO;
import com.mygym.model.entrenamientos.EjercicioEntrenamientoDiario;
import com.mygym.model.entrenamientos.EntrenamientoDiario;

@Repository
public class EntrenamientoDiarioImpl implements EntrenamientoDiarioDAO {

	@Autowired
	private EntityManager entityManager;

	@Override
	public EntrenamientoDiario createUpdateEntrenamientoDiario(EntrenamientoDiario entrenamientoDiario) {

		for (EjercicioEntrenamientoDiario ejercicioEntmntoDiario : entrenamientoDiario.getEjercicioEntrenamiento()) {

			EjercicioEntrenamientoDiario a = new EjercicioEntrenamientoDiario();
			a = ejercicioEntmntoDiario;
			a.setEntrenamiento(entrenamientoDiario);
		}
		Session currentSession = entityManager.unwrap(Session.class);
		return (EntrenamientoDiario) currentSession.merge(entrenamientoDiario);
	}

}
