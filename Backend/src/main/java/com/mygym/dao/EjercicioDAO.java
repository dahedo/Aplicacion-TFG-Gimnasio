package com.mygym.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mygym.model.Ejercicio;

public interface EjercicioDAO extends JpaRepository<Ejercicio, Integer>{

}
