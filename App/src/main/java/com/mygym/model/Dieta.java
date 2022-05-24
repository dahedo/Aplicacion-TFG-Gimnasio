package com.mygym.model;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.mygym.model.Usuarios.Cliente;

@Entity
public class Dieta {

	@Id
	private Integer id;

	@Column
	private String nombre;

	@OneToMany(mappedBy = "dieta")
	private Set<Cliente> clientes;

	@OneToMany(mappedBy = "dieta")
	private Set<AlimentacionDiariaDieta> alimentacionDiariaDietas;

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
	 * @return the alimentacionDiariaDietas
	 */
	public Set<AlimentacionDiariaDieta> getAlimentacionDiariaDietas() {
		return alimentacionDiariaDietas;
	}

	/**
	 * @param alimentacionDiariaDietas the alimentacionDiariaDietas to set
	 */
	public void setAlimentacionDiariaDietas(Set<AlimentacionDiariaDieta> alimentacionDiariaDietas) {
		this.alimentacionDiariaDietas = alimentacionDiariaDietas;
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
