package com.mygym.model.entrenamientos;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class EntrenamientoDiario {

	@Id
	private Integer id;

	@Column
	private String nombre;

	@OneToMany(mappedBy = "entrenamiento")
	private Set<EjercicioEntrenamientoDiario> EjercicioEntrenamiento;

	@OneToMany(mappedBy = "entrenamientoSemanal")
	private Set<EntrenamientoSemanalDiario> entrenamientosSemanales;

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
	 * @return the ejercicioEntrenamiento
	 */
	public Set<EjercicioEntrenamientoDiario> getEjercicioEntrenamiento() {
		return EjercicioEntrenamiento;
	}

	/**
	 * @param ejercicioEntrenamiento the ejercicioEntrenamiento to set
	 */
	public void setEjercicioEntrenamiento(Set<EjercicioEntrenamientoDiario> ejercicioEntrenamiento) {
		EjercicioEntrenamiento = ejercicioEntrenamiento;
	}

	/**
	 * @param id the id to set
	 */
	public void setId(Integer id) {
		this.id = id;
	}

	/**
	 * @return the nombre
	 */
	public String getNombre() {
		return nombre;
	}

	/**
	 * @param nombre the nombre to set
	 */
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

}
