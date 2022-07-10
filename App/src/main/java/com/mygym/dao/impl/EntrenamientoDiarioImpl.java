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

	@Override
	public List<EntrenamientoDiario> getAllEntrenamientosDiarios() {
		CriteriaBuilder cb = entityManager.getCriteriaBuilder();
		CriteriaQuery<EntrenamientoDiario> cq = cb.createQuery(EntrenamientoDiario.class);
		Root<EntrenamientoDiario> rootEntry = cq.from(EntrenamientoDiario.class);
		CriteriaQuery<EntrenamientoDiario> all = cq.select(rootEntry);
		TypedQuery<EntrenamientoDiario> allQuery = entityManager.createQuery(all);

		return allQuery.getResultList();
	}

}
