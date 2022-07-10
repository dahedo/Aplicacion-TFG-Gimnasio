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

import com.mygym.dao.EntrenamientoSemanalDAO;
import com.mygym.model.entrenamientos.EntrenamientoSemanal;
import com.mygym.model.entrenamientos.EntrenamientoSemanalDiario;

@Repository
public class EntrenamientoSemanalImpl implements EntrenamientoSemanalDAO {

	@Autowired
	private EntityManager entityManager;

	@Override
	public EntrenamientoSemanal createUpdateEntrenamientoSemanal(EntrenamientoSemanal entrenamientoSemanal) {
		for (EntrenamientoSemanalDiario EntmntoDiario : entrenamientoSemanal.getEntrenamientoDiarios()) {

			EntrenamientoSemanalDiario a = new EntrenamientoSemanalDiario();
			a = EntmntoDiario;
			a.setEntrenamientoSemanal(entrenamientoSemanal);
		}
		Session currentSession = entityManager.unwrap(Session.class);
		return (EntrenamientoSemanal) currentSession.merge(entrenamientoSemanal);
	}

	@Override
	public List<EntrenamientoSemanal> getAllEntrenamientossemanales() {
		CriteriaBuilder cb = entityManager.getCriteriaBuilder();
		CriteriaQuery<EntrenamientoSemanal> cq = cb.createQuery(EntrenamientoSemanal.class);
		Root<EntrenamientoSemanal> rootEntry = cq.from(EntrenamientoSemanal.class);
		CriteriaQuery<EntrenamientoSemanal> all = cq.select(rootEntry);
		TypedQuery<EntrenamientoSemanal> allQuery = entityManager.createQuery(all);

		return allQuery.getResultList();
	}

}
