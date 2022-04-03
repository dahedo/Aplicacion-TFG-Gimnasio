package com.mygym.model.Usuarios;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.mygym.model.DietaCliente;
import com.mygym.model.EntrenamientoCliente;

@Entity
public class Cliente {

	@Id
	private long id;

	@Column
	private String nombre;

	@Column
	private String apellidos;

	@Column
	private String email;

	@Column
	private String fechaNacimiento;

	@OneToMany(mappedBy = "entrenamiento")
	private Set<EntrenamientoCliente> entrenamientosClientes;

	@OneToMany(mappedBy = "dieta")
	private Set<DietaCliente> dietasClientes;

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
