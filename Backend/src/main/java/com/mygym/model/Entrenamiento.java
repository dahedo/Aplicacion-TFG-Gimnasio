package com.mygym.model;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Entrenamiento {

	@Id
	private Integer id;

	@Column
	private String nombreEntrenamiento;

	@OneToMany(mappedBy = "entrenamiento")
	private Set<EjercicioEntrenamiento> EjercicioEntrenamiento;

	@OneToMany(mappedBy = "cliente")
	private Set<EntrenamientoCliente> entrenamientosClientes;

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
	public Set<EjercicioEntrenamiento> getEjercicioEntrenamiento() {
		return EjercicioEntrenamiento;
	}

	/**
	 * @return the entrenamientosClientes
	 */
	public Set<EntrenamientoCliente> getEntrenamientosClientes() {
		return entrenamientosClientes;
	}

	/**
	 * @param entrenamientosClientes the entrenamientosClientes to set
	 */
	public void setEntrenamientosClientes(Set<EntrenamientoCliente> entrenamientosClientes) {
		this.entrenamientosClientes = entrenamientosClientes;
	}

	/**
	 * @param ejercicioEntrenamiento the ejercicioEntrenamiento to set
	 */
	public void setEjercicioEntrenamiento(Set<EjercicioEntrenamiento> ejercicioEntrenamiento) {
		EjercicioEntrenamiento = ejercicioEntrenamiento;
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
