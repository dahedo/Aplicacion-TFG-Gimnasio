package com.mygym.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mygym.model.entrenamientos.Ejercicio;

public interface EjercicioDAO extends JpaRepository<Ejercicio, Integer>{

}
