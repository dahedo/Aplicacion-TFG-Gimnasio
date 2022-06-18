package com.mygym.model.entrenamientos;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.mygym.model.usuarios.Cliente;

@Entity
public class EntrenamientoSemanal {

	@Id
	private Integer id;

	@Column
	private String nombre;

	@OneToMany(mappedBy = "entrenamientoDiario")
	private Set<EntrenamientoSemanalDiario> entrenamientoDiarios;

	@OneToMany(mappedBy = "entrenamientoSemanal")
	private Set<Cliente> clientes;

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
}