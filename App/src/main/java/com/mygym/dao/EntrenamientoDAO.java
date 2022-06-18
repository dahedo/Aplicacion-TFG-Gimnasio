package com.mygym.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mygym.model.entrenamientos.EntrenamientoDiario;

public interface EntrenamientoDAO extends JpaRepository<EntrenamientoDiario, Integer>{

}
