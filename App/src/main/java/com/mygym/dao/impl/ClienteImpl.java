package com.mygym.dao.impl;

import javax.persistence.EntityManager;

import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.mygym.dao.ClienteDAO;
import com.mygym.model.usuarios.Cliente;

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

	@Override
	public Cliente createUpdateCliente(Cliente cliente) {
		Session currentSession = entityManager.unwrap(Session.class);
		Cliente cli = currentSession.get(Cliente.class, cliente.getUser_id());

		cliente.setUsername(cli.getUsername());
		cliente.setPassword(cli.getPassword());
		cliente.setRol(cli.getRol());

		return (Cliente) currentSession.merge(cliente);

	}

}
