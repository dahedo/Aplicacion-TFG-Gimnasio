package com.mygym.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Entrenamiento {

	@Id
	private Integer id;
	
	@Column
	private String nombreEntrenamiento;

	
		//////////////////////////
	//////////////////////////
//////////////////////////
	
	/**
	 * @return the id
	 */
	public Integer getId() {
		return id;
	}

	/**
	 * @param id the id to set
	 */
	public void setId(Integer id) {
		this.id = id;
	}

	/**
	 * @return the nombreEntrenamiento
	 */
	public String getNombreEntrenamiento() {
		return nombreEntrenamiento;
	}

	/**
	 * @param nombreEntrenamiento the nombreEntrenamiento to set
	 */
	public void setNombreEntrenamiento(String nombreEntrenamiento) {
		this.nombreEntrenamiento = nombreEntrenamiento;
	}
	
	
	
}
