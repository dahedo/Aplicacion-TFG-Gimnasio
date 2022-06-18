package com.mygym.model.nutricion;

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
public class Dieta {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	@Column
	private String nombre;

	@OneToMany(mappedBy = "dieta")
	private Set<Cliente> clientes;

	@OneToMany(mappedBy = "dieta", cascade = CascadeType.ALL)
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

	public Dieta() {
		super();
	}

	public Dieta(Integer id, String nombre, Set<Cliente> clientes,
			Set<AlimentacionDiariaDieta> alimentacionDiariaDietas) {
		super();
		this.id = id;
		this.nombre = nombre;
		this.clientes = clientes;
		this.alimentacionDiariaDietas = alimentacionDiariaDietas;
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

	/**
	 * @return the clientes
	 */
	public Set<Cliente> getClientes() {
		return clientes;
	}

	/**
	 * @param clientes the clientes to set
	 */
	public void setClientes(Set<Cliente> clientes) {
		this.clientes = clientes;
	}

}
