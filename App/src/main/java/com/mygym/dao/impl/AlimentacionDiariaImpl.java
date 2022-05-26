package com.mygym.dao.impl;

import javax.persistence.EntityManager;

import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.mygym.dao.AlimentacionDiariaDAO;
import com.mygym.model.AlimentacionDiaria;

@Repository
public class AlimentacionDiariaImpl implements AlimentacionDiariaDAO {

	@Autowired
	private EntityManager entityManager;

	@Override
	public AlimentacionDiaria createUpdateAlimentacionDiaria(AlimentacionDiaria alimentacionDiaria) {

		Session currentSession = entityManager.unwrap(Session.class);
		AlimentacionDiaria alim = (AlimentacionDiaria) currentSession.merge(alimentacionDiaria);

		return alim;
	}

}
