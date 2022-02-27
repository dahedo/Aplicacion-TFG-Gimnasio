package com.mygym.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Lob;

@Entity
public class Ejercicio {

	@Id
	private Integer id;

	@Column
	private String nombreEjercicio;

	@Column
	private String grupoMuscular;

	@Lob
	@Column
	private String descripcion;

	@Column
	private String otraInfo;

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
	 * @return the grupoMuscular
	 */
	public String getGrupoMuscular() {
		return grupoMuscular;
	}

	/**
	 * @param grupoMuscular the grupoMuscular to set
	 */
	public void setGrupoMuscular(String grupoMuscular) {
		this.grupoMuscular = grupoMuscular;
	}

	/**
	 * @param id the id to set
	 */
	public void setId(Integer id) {
		this.id = id;
	}

	/**
	 * @return the nombreEjercicio
	 */
	public String getNombreEjercicio() {
		return nombreEjercicio;
	}

	/**
	 * @param nombreEjercicio the nombreEjercicio to set
	 */
	public void setNombreEjercicio(String nombreEjercicio) {
		this.nombreEjercicio = nombreEjercicio;
	}

	/**
	 * @return the descripcion
	 */
	public String getDescripcion() {
		return descripcion;
	}

	/**
	 * @param descripcion the descripcion to set
	 */
	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	/**
	 * @return the otraInfo
	 */
	public String getOtraInfo() {
		return otraInfo;
	}

	/**
	 * @param otraInfo the otraInfo to set
	 */
	public void setOtraInfo(String otraInfo) {
		this.otraInfo = otraInfo;
	}

}
