package com.mygym.model.entrenamientos;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class EntrenamientoSemanalDiario {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	@JsonIgnore
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "entrenamientoSemanal_id")
	private EntrenamientoSemanal entrenamientoSemanal;

	@ManyToOne
	@JoinColumn(name = "entrenamientoDiario_id")
	private EntrenamientoDiario entrenamientoDiario;

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
	 * @return the entrenamientoSemanal
	 */
	public EntrenamientoSemanal getEntrenamientoSemanal() {
		return entrenamientoSemanal;
	}

	/**
	 * @param entrenamientoSemanal the entrenamientoSemanal to set
	 */
	public void setEntrenamientoSemanal(EntrenamientoSemanal entrenamientoSemanal) {
		this.entrenamientoSemanal = entrenamientoSemanal;
	}

	/**
	 * @return the entrenamientoDiario
	 */
	public EntrenamientoDiario getEntrenamientoDiario() {
		return entrenamientoDiario;
	}

	/**
	 * @param entrenamientoDiario the entrenamientoDiario to set
	 */
	public void setEntrenamientoDiario(EntrenamientoDiario entrenamientoDiario) {
		this.entrenamientoDiario = entrenamientoDiario;
	}

}
