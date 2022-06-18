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

import com.mygym.dao.DietaDAO;
import com.mygym.model.nutricion.AlimentacionDiariaDieta;
import com.mygym.model.nutricion.Dieta;

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

		Session currentSession = entityManager.unwrap(Session.class);
		return (Dieta) currentSession.merge(d);
	}

	@Override
	public List<Dieta> getAllDietas() {
		CriteriaBuilder cb = entityManager.getCriteriaBuilder();
		CriteriaQuery<Dieta> cq = cb.createQuery(Dieta.class);
		Root<Dieta> rootEntry = cq.from(Dieta.class);
		CriteriaQuery<Dieta> all = cq.select(rootEntry);
		TypedQuery<Dieta> allQuery = entityManager.createQuery(all);

		return allQuery.getResultList();
	}
}
