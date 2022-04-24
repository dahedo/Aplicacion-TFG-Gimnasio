package com.mygym.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mygym.model.Usuarios.Cliente;

public interface ClienteDAO extends JpaRepository<Cliente, Integer> {

}
