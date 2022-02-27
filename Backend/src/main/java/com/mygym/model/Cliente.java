package com.mygym.model;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Cliente {

	@Id
	private Integer id;

	@Column
	private String nombre;

	@Column
	private String apellidos;

	@Column
	private String email;

	@Column
	private String fechaNacimiento;

	@Column
	private String nombreUsuario;

	@Column
	private String contraseña;

	@OneToMany(mappedBy = "entrenamiento")
	private Set<EntrenamientoCliente> entrenamientosClientes;

	@OneToMany(mappedBy = "dieta")
	private Set<DietaCliente> dietasClientes;

	/**
	 * @return the id
	 */
	public Integer getId() {
		return id;
	}

	/**
	 * @return the dietasClientes
	 */
	public Set<DietaCliente> getDietasClientes() {
		return dietasClientes;
	}

	/**
	 * @param dietasClientes the dietasClientes to set
	 */
	public void setDietasClientes(Set<DietaCliente> dietasClientes) {
		this.dietasClientes = dietasClientes;
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
	 * @return the apellidos
	 */
	public String getApellidos() {
		return apellidos;
	}

	/**
	 * @param apellidos the apellidos to set
	 */
	public void setApellidos(String apellidos) {
		this.apellidos = apellidos;
	}

	/**
	 * @return the email
	 */
	public String getEmail() {
		return email;
	}

	/**
	 * @param email the email to set
	 */
	public void setEmail(String email) {
		this.email = email;
	}

	/**
	 * @return the fechaNacimiento
	 */
	public String getFechaNacimiento() {
		return fechaNacimiento;
	}

	/**
	 * @param fechaNacimiento the fechaNacimiento to set
	 */
	public void setFechaNacimiento(String fechaNacimiento) {
		this.fechaNacimiento = fechaNacimiento;
	}

	/**
	 * @return the nombreUsuario
	 */
	public String getNombreUsuario() {
		return nombreUsuario;
	}

	/**
	 * @param nombreUsuario the nombreUsuario to set
	 */
	public void setNombreUsuario(String nombreUsuario) {
		this.nombreUsuario = nombreUsuario;
	}

	/**
	 * @return the contraseña
	 */
	public String getContraseña() {
		return contraseña;
	}

	/**
	 * @param contraseña the contraseña to set
	 */
	public void setContraseña(String contraseña) {
		this.contraseña = contraseña;
	}

	/**
	 * @return the entrenamientosClientes
	 */
	public Set<EntrenamientoCliente> getEntrenamientosClientes() {
		return entrenamientosClientes;
	}

	/**
	 * @param entrenamientosClientes the entrenamientosClientes to set
	 */
	public void setEntrenamientosClientes(Set<EntrenamientoCliente> entrenamientosClientes) {
		this.entrenamientosClientes = entrenamientosClientes;
	}

}
