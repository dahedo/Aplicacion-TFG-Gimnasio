package com.mygym.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mygym.dao.ClienteDAO;
import com.mygym.model.Usuarios.Cliente;
import com.mygym.service.ClienteService;

@Service
public class ClienteServiceImpl implements ClienteService {

	@Autowired
	private ClienteDAO clienteDao;

	@Override
	public Cliente findById(long id) {
		Cliente cliente = clienteDao.findById(id);
		return cliente;
	}

}
