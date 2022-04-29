package com.mygym.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class ComidaDieta {

	@Id
	private Integer id;

	@ManyToOne
	@JoinColumn(name = "comida_id")
	private Comida comida_id;

	@ManyToOne
	@JoinColumn(name = "dieta_id")
	private Dieta dieta_id;

}
