package com.mygym.model.Usuarios;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.PrimaryKeyJoinColumn;

import com.mygym.model.DietaCliente;
import com.mygym.model.EntrenamientoCliente;

@Entity
@PrimaryKeyJoinColumn(name = "user_id")
public class Cliente extends Usuario {
	@Column
	private String nombre;

	@Column
	private String apellidos;

	@Column
	private String email;

	@Column
	private String fechaNacimiento;

	@Column
	private Boolean parq1;
	@Column
	private Boolean parq2;
	@Column
	private Boolean parq3;
	@Column
	private Boolean parq4;
	@Column
	private Boolean parq5;
	@Column
	private Boolean parq6;
	@Column
	private Boolean parq7;

	@ManyToOne
	@JoinColumn(name = "entrenador_id", nullable = true)
	private Entrenador entrenador;

	@ManyToOne
	@JoinColumn(name = "nutricionista_id", nullable = true)
	private Nutricionista nutricionista;

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

	/**
	 * @return the parq1
	 */
	public Boolean getParq1() {
		return parq1;
	}

	/**
	 * @param parq1 the parq1 to set
	 */
	public void setParq1(Boolean parq1) {
		this.parq1 = parq1;
	}

	/**
	 * @return the parq2
	 */
	public Boolean getParq2() {
		return parq2;
	}

	/**
	 * @param parq2 the parq2 to set
	 */
	public void setParq2(Boolean parq2) {
		this.parq2 = parq2;
	}

	/**
	 * @return the parq3
	 */
	public Boolean getParq3() {
		return parq3;
	}

	/**
	 * @param parq3 the parq3 to set
	 */
	public void setParq3(Boolean parq3) {
		this.parq3 = parq3;
	}

	/**
	 * @return the parq4
	 */
	public Boolean getParq4() {
		return parq4;
	}

	/**
	 * @param parq4 the parq4 to set
	 */
	public void setParq4(Boolean parq4) {
		this.parq4 = parq4;
	}

	/**
	 * @return the parq5
	 */
	public Boolean getParq5() {
		return parq5;
	}

	/**
	 * @param parq5 the parq5 to set
	 */
	public void setParq5(Boolean parq5) {
		this.parq5 = parq5;
	}

	/**
	 * @return the parq6
	 */
	public Boolean getParq6() {
		return parq6;
	}

	/**
	 * @param parq6 the parq6 to set
	 */
	public void setParq6(Boolean parq6) {
		this.parq6 = parq6;
	}

	/**
	 * @return the parq7
	 */
	public Boolean getParq7() {
		return parq7;
	}

	/**
	 * @param parq7 the parq7 to set
	 */
	public void setParq7(Boolean parq7) {
		this.parq7 = parq7;
	}

}
