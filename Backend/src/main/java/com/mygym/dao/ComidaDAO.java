package com.mygym.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mygym.model.Comida; 

public interface ComidaDAO extends JpaRepository<Comida, Integer>{

}
