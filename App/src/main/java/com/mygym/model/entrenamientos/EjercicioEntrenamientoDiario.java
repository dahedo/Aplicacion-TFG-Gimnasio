package com.mygym.model.entrenamientos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class EjercicioEntrenamientoDiario {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	@Column
	private Integer repeticiones;

	@Column
	private Integer series;

	@ManyToOne
	@JoinColumn(name = "ejercicio_id")
	private Ejercicio ejercicio;

	@JsonIgnore
	@ManyToOne(fetch = FetchType.LAZY)
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

	/**
	 * @return the repeticiones
	 */
	public Integer getRepeticiones() {
		return repeticiones;
	}

	/**
	 * @param repeticiones the repeticiones to set
	 */
	public void setRepeticiones(Integer repeticiones) {
		this.repeticiones = repeticiones;
	}

	/**
	 * @return the series
	 */
	public Integer getSeries() {
		return series;
	}

	/**
	 * @param series the series to set
	 */
	public void setSeries(Integer series) {
		this.series = series;
	}

	public EjercicioEntrenamientoDiario(Integer id, Integer repeticiones, Integer series, Ejercicio ejercicio,
			EntrenamientoDiario entrenamiento) {
		super();
		this.id = id;
		this.repeticiones = repeticiones;
		this.series = series;
		this.ejercicio = ejercicio;
		this.entrenamiento = entrenamiento;
	}

	public EjercicioEntrenamientoDiario() {
		super();
	}

}
