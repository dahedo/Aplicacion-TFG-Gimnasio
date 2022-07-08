package com.mygym.model.entrenamientos;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Ejercicio {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	@Column
	private String nombre;

	@Column
	private String grupoMuscular;

	@Column
	private String parteCuerpo;

	@Column
	private String urlImagen;

	@Column
	private String equipamiento;

	@OneToMany(mappedBy = "ejercicio", cascade = CascadeType.ALL)
	private Set<EjercicioEntrenamientoDiario> ejerciciosEntrenamientos;

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
	 * @param ejerciciosEntrenamientos the ejerciciosEntrenamientos to set
	 */
	public void setEjerciciosEntrenamientos(Set<EjercicioEntrenamientoDiario> ejerciciosEntrenamientos) {
		this.ejerciciosEntrenamientos = ejerciciosEntrenamientos;
	}

	/**
	 * @return the grupoMuscular
	 */
	public String getGrupoMuscular() {
		return grupoMuscular;
	}

	/**
	 * @param grupoMuscular the grupoMuscular to set
	 */
	public void setGrupoMuscular(String grupoMuscular) {
		this.grupoMuscular = grupoMuscular;
	}

	/**
	 * @param id the id to set
	 */
	public void setId(Integer id) {
		this.id = id;
	}

	/**
	 * @return the nombreEjercicio
	 */
	public String getNombre() {
		return nombre;
	}

	/**
	 * @param nombreEjercicio the nombreEjercicio to set
	 */
	public void setNombre(String nombreEjercicio) {
		this.nombre = nombreEjercicio;
	}

	/**
	 * @return the parteCuerpo
	 */
	public String getParteCuerpo() {
		return parteCuerpo;
	}

	/**
	 * @param parteCuerpo the parteCuerpo to set
	 */
	public void setParteCuerpo(String parteCuerpo) {
		this.parteCuerpo = parteCuerpo;
	}

	/**
	 * @return the urlImagen
	 */
	public String getUrlImagen() {
		return urlImagen;
	}

	/**
	 * @param urlImagen the urlImagen to set
	 */
	public void setUrlImagen(String urlImagen) {
		this.urlImagen = urlImagen;
	}

	/**
	 * @return the equipamiento
	 */
	public String getEquipamiento() {
		return equipamiento;
	}

	/**
	 * @param equipamiento the equipamiento to set
	 */
	public void setEquipamiento(String equipamiento) {
		this.equipamiento = equipamiento;
	}

}
