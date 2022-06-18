package com.mygym.dao.impl;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;

import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.mygym.dao.AlimentacionDiariaDAO;
import com.mygym.model.nutricion.AlimentacionDiaria;

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

	@Override
	public List<AlimentacionDiaria> getAllAlimentacionDiaria() {
		CriteriaBuilder cb = entityManager.getCriteriaBuilder();
		CriteriaQuery<AlimentacionDiaria> cq = cb.createQuery(AlimentacionDiaria.class);
		Root<AlimentacionDiaria> rootEntry = cq.from(AlimentacionDiaria.class);
		CriteriaQuery<AlimentacionDiaria> all = cq.select(rootEntry);
		TypedQuery<AlimentacionDiaria> allQuery = entityManager.createQuery(all);

		return allQuery.getResultList();
	}

}
