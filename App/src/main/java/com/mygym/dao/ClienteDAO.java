package com.mygym.dao;

import com.mygym.model.usuarios.Cliente;

public interface ClienteDAO {

	public Cliente findById(long id);

	public Cliente createUpdateCliente(Cliente cliente);
}
