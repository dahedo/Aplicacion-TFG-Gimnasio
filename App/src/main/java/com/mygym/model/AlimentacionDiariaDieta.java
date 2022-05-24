package com.mygym.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class AlimentacionDiariaDieta {

	@Id
	private Long id;

	@ManyToOne
	@JoinColumn(name = "dieta_id")
	private Dieta dieta;

	@ManyToOne
	@JoinColumn(name = "alimentacionDiaria_id")
	private AlimentacionDiaria alimentacionDiaria;

	/**
	 * @return the alimentacionDiaria
	 */
	public AlimentacionDiaria getAlimentacionDiaria() {
		return alimentacionDiaria;
	}

	private int diaSemana;

	/**
	 * @return the diaSemana
	 */
	public int getDiaSemana() {
		return diaSemana;
	}

	/**
	 * @param diaSemana the diaSemana to set
	 */
	public void setDiaSemana(int diaSemana) {
		this.diaSemana = diaSemana;
	}

}
