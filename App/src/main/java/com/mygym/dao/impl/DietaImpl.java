package com.mygym.dao.impl;

import javax.persistence.EntityManager;

import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.mygym.dao.DietaDAO;
import com.mygym.model.AlimentacionDiariaDieta;
import com.mygym.model.Dieta;

@Repository
public class DietaImpl implements DietaDAO {

	@Autowired
	private EntityManager entityManager;

	@Override
	public Dieta updateDieta(Dieta d) {

		for (AlimentacionDiariaDieta alimentacionDiariaDieta : d.getAlimentacionDiariaDietas()) {
			AlimentacionDiariaDieta a = new AlimentacionDiariaDieta();
			a = alimentacionDiariaDieta;
			a.setDieta(d);
		}

		Session currentSession1 = entityManager.unwrap(Session.class);
		Dieta dieta = (Dieta) currentSession1.merge(d);
		return d;
	}
}
