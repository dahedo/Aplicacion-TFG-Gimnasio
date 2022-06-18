package com.mygym.dao.impl;

import javax.persistence.EntityManager;

import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.mygym.dao.NutricionistaDAO;
import com.mygym.model.usuarios.Nutricionista;

@Repository
public class NutricionistaImpl implements NutricionistaDAO {

	@Autowired
	private EntityManager entityManager;

	@Override
	public Nutricionista findById(long id) {

		Session currentSession = entityManager.unwrap(Session.class);
		Nutricionista nutricionista = currentSession.get(Nutricionista.class, id);
		return nutricionista;
	}

}
