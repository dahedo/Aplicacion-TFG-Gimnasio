package com.mygym.dao.impl;

import javax.persistence.EntityManager;

import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.mygym.dao.ClienteDAO;
import com.mygym.model.Usuarios.Cliente;

@Repository
public class ClienteImpl implements ClienteDAO {

	@Autowired
	private EntityManager entityManager;

	@Override
	public Cliente findById(long id) {

		Session currentSession = entityManager.unwrap(Session.class);
		Cliente cliente = currentSession.get(Cliente.class, id);
		return cliente;
	}

}
