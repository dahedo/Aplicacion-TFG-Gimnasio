package com.mygym.dao.impl;

import javax.persistence.EntityManager;

import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.mygym.dao.EntrenadorDAO;
import com.mygym.model.Usuarios.Entrenador;

@Repository
public class EntrenadorImpl implements EntrenadorDAO {

	@Autowired
	private EntityManager entityManager;

	@Override
	public Entrenador findById(long id) {
		Session currentSession = entityManager.unwrap(Session.class);
		Entrenador entrenador = currentSession.get(Entrenador.class, id);
		return entrenador;
	}

}
