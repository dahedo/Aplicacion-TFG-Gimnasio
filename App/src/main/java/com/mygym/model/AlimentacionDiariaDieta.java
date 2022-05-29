package com.mygym.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;

@Entity
public class AlimentacionDiariaDieta {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@ManyToOne
	@JsonDeserialize(as = Dieta.class)
	@JoinColumn(name = "dieta_id")
	private Dieta dieta;

	@ManyToOne
	@JoinColumn(name = "alimentacionDiaria_id")
	private AlimentacionDiaria alimentacionDiaria;

	@Column
	private int diaSemana;

	public AlimentacionDiariaDieta(Long id, Dieta dieta, AlimentacionDiaria alimentacionDiaria, int diaSemana) {
		super();
		this.id = id;
		this.dieta = dieta;
		this.alimentacionDiaria = alimentacionDiaria;
		this.diaSemana = diaSemana;
	}

	public AlimentacionDiariaDieta() {
		super();
	}

	/**
	 * @return the diaSemana
	 */
	public int getDiaSemana() {
		return diaSemana;
	}

	/**
	 * @return the alimentacionDiaria
	 */
	public AlimentacionDiaria getAlimentacionDiaria() {
		return alimentacionDiaria;
	}

	/**
	 * @param diaSemana the diaSemana to set
	 */
	public void setDiaSemana(int diaSemana) {
		this.diaSemana = diaSemana;
	}

	/**
	 * @return the id
	 */
	public Long getId() {
		return id;
	}

	/**
	 * @param id the id to set
	 */
	public void setId(Long id) {
		this.id = id;
	}

	/**
	 * @return the dieta
	 */
	public Dieta getDieta() {
		return dieta;
	}

	/**
	 * @param dieta the dieta to set
	 */
	public void setDieta(Dieta dieta) {
		this.dieta = dieta;
	}

	/**
	 * @param alimentacionDiaria the alimentacionDiaria to set
	 */
	public void setAlimentacionDiaria(AlimentacionDiaria alimentacionDiaria) {
		this.alimentacionDiaria = alimentacionDiaria;
	}

}
