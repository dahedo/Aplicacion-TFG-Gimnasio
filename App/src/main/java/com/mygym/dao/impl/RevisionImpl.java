package com.mygym.dao.impl;

import javax.persistence.EntityManager;

import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.mygym.dao.RevisionDAO;
import com.mygym.model.Revision;

@Repository
public class RevisionImpl implements RevisionDAO {

	@Autowired
	private EntityManager entityManager;

	@Override
	public Revision createUpdateRevision(Revision revision) {
		Session currentSession1 = entityManager.unwrap(Session.class);
		Revision rev = (Revision) currentSession1.merge(revision);
		return rev;
	}

}
