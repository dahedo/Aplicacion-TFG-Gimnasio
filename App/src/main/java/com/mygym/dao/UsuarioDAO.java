package com.mygym.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.mygym.model.Usuarios.Usuario;

@Repository
public interface UsuarioDAO extends CrudRepository<Usuario, Integer> {

	Usuario findByUsername(String username);

}