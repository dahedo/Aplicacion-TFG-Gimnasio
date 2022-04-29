package com.mygym.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class EjercicioEntrenamiento {

	@Id
	private Integer id;

	@ManyToOne
	@JoinColumn(name = "ejercicio_id")
	private Ejercicio ejercicio;

	@ManyToOne
	@JoinColumn(name = "entrenamiento_id")
	private Entrenamiento entrenamiento;

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
	 * @return the ejercicio
	 */
	public Ejercicio getEjercicio() {
		return ejercicio;
	}

	/**
	 * @param ejercicio the ejercicio to set
	 */
	public void setEjercicio(Ejercicio ejercicio) {
		this.ejercicio = ejercicio;
	}

	/**
	 * @return the entrenamiento
	 */
	public Entrenamiento getEntrenamiento() {
		return entrenamiento;
	}

	/**
	 * @param entrenamiento the entrenamiento to set
	 */
	public void setEntrenamiento(Entrenamiento entrenamiento) {
		this.entrenamiento = entrenamiento;
	}

}
