package com.mygym.service;

import com.mygym.model.Usuarios.Cliente;

public interface ClienteService {

	public Cliente findById(long id);

	public Cliente createUpdateCliente(Cliente cliente);

}
