package com.mygym.model.entrenamientos;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.mygym.model.usuarios.Cliente;

@Entity
public class EntrenamientoSemanal {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	@Column
	private String nombre;

	@OneToMany(mappedBy = "entrenamientoDiario", cascade = CascadeType.ALL)
	private Set<EntrenamientoSemanalDiario> entrenamientoDiarios;

	@OneToMany(mappedBy = "entrenamientoSemanal", cascade = CascadeType.ALL)
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

	/**
	 * @return the entrenamientoDiarios
	 */
	public Set<EntrenamientoSemanalDiario> getEntrenamientoDiarios() {
		return entrenamientoDiarios;
	}

	/**
	 * @param entrenamientoDiarios the entrenamientoDiarios to set
	 */
	public void setEntrenamientoDiarios(Set<EntrenamientoSemanalDiario> entrenamientoDiarios) {
		this.entrenamientoDiarios = entrenamientoDiarios;
	}

}