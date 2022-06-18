package com.mygym.dao.impl;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.mygym.dao.AlimentacionDiariaDietaDAO;
import com.mygym.model.nutricion.AlimentacionDiariaDieta;

@Transactional
@Repository
public class AlimentacionDiariaDietaImpl implements AlimentacionDiariaDietaDAO {

	@Autowired
	private EntityManager entityManager;

	@Override
	public AlimentacionDiariaDieta createUpdateAlimentacionDiaria(AlimentacionDiariaDieta alimentacionDiariaDieta) {

		Session currentSession = entityManager.unwrap(Session.class);
		AlimentacionDiariaDieta alim = (AlimentacionDiariaDieta) currentSession.merge(alimentacionDiariaDieta);

		return alim;
	}

}
