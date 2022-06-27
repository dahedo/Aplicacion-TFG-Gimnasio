package com.mygym.model.entrenamientos;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
public class EntrenamientoDiario {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	@Column
	private String nombre;

	@OneToMany(mappedBy = "entrenamiento", cascade = CascadeType.ALL)
	@JsonBackReference
	private Set<EjercicioEntrenamientoDiario> ejercicioEntrenamiento;

	@OneToMany(mappedBy = "entrenamientoSemanal", cascade = CascadeType.ALL)
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
	 * @return the entrenamientosSemanales
	 */
	public Set<EntrenamientoSemanalDiario> getEntrenamientosSemanales() {
		return entrenamientosSemanales;
	}

	/**
	 * @param entrenamientosSemanales the entrenamientosSemanales to set
	 */
	public void setEntrenamientosSemanales(Set<EntrenamientoSemanalDiario> entrenamientosSemanales) {
		this.entrenamientosSemanales = entrenamientosSemanales;
	}

	/**
	 * @return the ejercicioEntrenamiento
	 */
	public Set<EjercicioEntrenamientoDiario> getEjercicioEntrenamiento() {
		return ejercicioEntrenamiento;
	}

	/**
	 * @param ejercicioEntrenamiento the ejercicioEntrenamiento to set
	 */
	public void setEjercicioEntrenamiento(Set<EjercicioEntrenamientoDiario> ejercicioEntrenamiento) {
		this.ejercicioEntrenamiento = ejercicioEntrenamiento;
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

	public EntrenamientoDiario(Integer id, String nombre, Set<EjercicioEntrenamientoDiario> ejercicioEntrenamiento,
			Set<EntrenamientoSemanalDiario> entrenamientosSemanales) {
		super();
		this.id = id;
		this.nombre = nombre;
		this.ejercicioEntrenamiento = ejercicioEntrenamiento;
		this.entrenamientosSemanales = entrenamientosSemanales;
	}

	public EntrenamientoDiario() {
		super();
	}

}
