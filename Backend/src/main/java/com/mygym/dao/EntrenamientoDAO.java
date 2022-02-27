package com.mygym.dao;

import org.springframework.data.jpa.repository.JpaRepository;
 
import com.mygym.model.Entrenamiento;

public interface EntrenamientoDAO extends JpaRepository<Entrenamiento, Integer>{

}
