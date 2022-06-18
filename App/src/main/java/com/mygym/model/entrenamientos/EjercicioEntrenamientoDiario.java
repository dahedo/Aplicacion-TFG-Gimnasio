package com.mygym.model.entrenamientos;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class EjercicioEntrenamientoDiario {

	@Id
	private Integer id;

	@ManyToOne
	@JoinColumn(name = "ejercicio_id")
	private Ejercicio ejercicio;

	@ManyToOne
	@JoinColumn(name = "entrenamiento_id")
	private EntrenamientoDiario entrenamiento;

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
	public EntrenamientoDiario getEntrenamiento() {
		return entrenamiento;
	}

	/**
	 * @param entrenamiento the entrenamiento to set
	 */
	public void setEntrenamiento(EntrenamientoDiario entrenamiento) {
		this.entrenamiento = entrenamiento;
	}

}
