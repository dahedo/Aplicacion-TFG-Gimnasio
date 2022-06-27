package com.mygym.model.usuarios;

import java.util.Date;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.PrimaryKeyJoinColumn;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.mygym.model.ParametrosCliente;
import com.mygym.model.Revision;
import com.mygym.model.entrenamientos.EntrenamientoSemanal;
import com.mygym.model.nutricion.Dieta;

@Entity
@PrimaryKeyJoinColumn(name = "user_id")
public class Cliente extends Usuario {
	@Column
	private String nombre;

	@Column
	private String apellidos;

	@Column
	private String email;

	@JsonFormat(pattern = "dd/MM/yyyy")
	private Date fechaNacimiento;

	@Column
	private Integer altura;

	@ManyToOne
	@JoinColumn(name = "entrenador_id", nullable = true)
	private Entrenador entrenador;

	@ManyToOne
	@JoinColumn(name = "nutricionista_id", nullable = true)
	private Nutricionista nutricionista;

	@JsonFormat(pattern = "dd/MM/yyyy")
	private Date fechaAsignacionDieta;

	@ManyToOne
	@JoinColumn(name = "dieta_id", nullable = true)
	private Dieta dieta;

	@JsonManagedReference
	@OneToMany(mappedBy = "cliente", cascade = CascadeType.ALL)
	private Set<Revision> revisiones;

	@ManyToOne
	@JoinColumn(name = "entrenamientoSemanal_id", nullable = true)
	private EntrenamientoSemanal entrenamientoSemanal;

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "parametros_cliente_id", referencedColumnName = "id")
	private ParametrosCliente parametrosCliente;

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
	 * @return the fechaAsignacionDieta
	 */
	public Date getFechaAsignacionDieta() {
		return fechaAsignacionDieta;
	}

	/**
	 * @param fechaAsignacionDieta the fechaAsignacionDieta to set
	 */
	public void setFechaAsignacionDieta(Date fechaAsignacionDieta) {
		this.fechaAsignacionDieta = fechaAsignacionDieta;
	}

	/**
	 * @param fechaNacimiento the fechaNacimiento to set
	 */
	public void setFechaNacimiento(Date fechaNacimiento) {
		this.fechaNacimiento = fechaNacimiento;
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
	 * @return the dieta
	 */
	public Dieta getDieta() {
		return dieta;
	}

	/**
	 * @param dieta the dieta to set
	 */
	public void setDieta(Dieta dieta) {
		this.dieta = dieta;
	}

	/**
	 * @return the revisiones
	 */
	public Set<Revision> getRevisiones() {
		return revisiones;
	}

	/**
	 * @param revisiones the revisiones to set
	 */
	public void setRevisiones(Set<Revision> revisiones) {
		this.revisiones = revisiones;
	}

	/**
	 * @return the altura
	 */
	public Integer getAltura() {
		return altura;
	}

	/**
	 * @param altura the altura to set
	 */
	public void setAltura(Integer altura) {
		this.altura = altura;
	}

	/**
	 * @return the parametrosCliente
	 */
	public ParametrosCliente getParametrosCliente() {
		return parametrosCliente;
	}

	/**
	 * @param parametrosCliente the parametrosCliente to set
	 */
	public void setParametrosCliente(ParametrosCliente parametrosCliente) {
		this.parametrosCliente = parametrosCliente;
	}

	/**
	 * @return the fechaNacimiento
	 */
	public Date getFechaNacimiento() {
		return fechaNacimiento;
	}

	public Cliente() {
		super();
	}

}
