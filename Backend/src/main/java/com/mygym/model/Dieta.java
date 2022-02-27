package com.mygym.model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Dieta {

	@Id
	private Integer id;

	@Column
	private String nombre;

	@OneToMany(mappedBy = "id")
	private List<Comida> comidas;

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

	/**
	 * @return the comidas
	 */
	public List<Comida> getComidas() {
		return comidas;
	}

	/**
	 * @param comidas the comidas to set
	 */
	public void setComidas(List<Comida> comidas) {
		this.comidas = comidas;
	}

}
