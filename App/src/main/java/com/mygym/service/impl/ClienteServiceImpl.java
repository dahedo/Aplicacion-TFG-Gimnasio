package com.mygym.service.impl;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mygym.dao.ClienteDAO;
import com.mygym.model.usuarios.Cliente;
import com.mygym.service.ClienteService;

@Service
@Transactional
public class ClienteServiceImpl implements ClienteService {

	@Autowired
	private ClienteDAO clienteDao;

	@Override
	public Cliente findById(long id) {
		return clienteDao.findById(id);
	}

	@Override
	public Cliente createUpdateCliente(Cliente cliente) {
		return clienteDao.createUpdateCliente(cliente);
	}

}
