package com.mygym.model;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class AlimentacionDiaria {

	public AlimentacionDiaria() {

	}

	public AlimentacionDiaria(Integer id, String nombre, String desayuno, String mediaMañana, String comida,
			String merienda, String cena, String otros, String preEntreno, String postEntreno,
			Set<AlimentacionDiariaDieta> alimentacionDiariaDietas) {
		super();
		this.id = id;
		this.nombre = nombre;
		this.desayuno = desayuno;
		this.mediaMañana = mediaMañana;
		this.comida = comida;
		this.merienda = merienda;
		this.cena = cena;
		this.otros = otros;
		this.preEntreno = preEntreno;
		this.postEntreno = postEntreno;
		this.alimentacionDiariaDietas = alimentacionDiariaDietas;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	@Column
	private String nombre;

	@Column
	private String desayuno;

	@Column
	private String mediaMañana;

	@Column
	private String comida;

	@Column
	private String merienda;

	@Column
	private String cena;
	@Column
	private String otros;

	@Column
	private String preEntreno;

	@Column
	private String postEntreno;

	@OneToMany(mappedBy = "alimentacionDiaria")
	private Set<AlimentacionDiariaDieta> alimentacionDiariaDietas;

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
	 * @return the desayuno
	 */
	public String getDesayuno() {
		return desayuno;
	}

	/**
	 * @param desayuno the desayuno to set
	 */
	public void setDesayuno(String desayuno) {
		this.desayuno = desayuno;
	}

	/**
	 * @return the mediaMañana
	 */
	public String getMediaMañana() {
		return mediaMañana;
	}

	/**
	 * @param mediaMañana the mediaMañana to set
	 */
	public void setMediaMañana(String mediaMañana) {
		this.mediaMañana = mediaMañana;
	}

	/**
	 * @return the comida
	 */
	public String getComida() {
		return comida;
	}

	/**
	 * @param comida the comida to set
	 */
	public void setComida(String comida) {
		this.comida = comida;
	}

	/**
	 * @return the merienda
	 */
	public String getMerienda() {
		return merienda;
	}

	/**
	 * @param merienda the merienda to set
	 */
	public void setMerienda(String merienda) {
		this.merienda = merienda;
	}

	/**
	 * @return the cena
	 */
	public String getCena() {
		return cena;
	}

	/**
	 * @param cena the cena to set
	 */
	public void setCena(String cena) {
		this.cena = cena;
	}

	/**
	 * @return the otros
	 */
	public String getOtros() {
		return otros;
	}

	/**
	 * @param otros the otros to set
	 */
	public void setOtros(String otros) {
		this.otros = otros;
	}

	/**
	 * @return the preEntreno
	 */
	public String getPreEntreno() {
		return preEntreno;
	}

	/**
	 * @param preEntreno the preEntreno to set
	 */
	public void setPreEntreno(String preEntreno) {
		this.preEntreno = preEntreno;
	}

	/**
	 * @return the postEntreno
	 */
	public String getPostEntreno() {
		return postEntreno;
	}

	/**
	 * @param postEntreno the postEntreno to set
	 */
	public void setPostEntreno(String postEntreno) {
		this.postEntreno = postEntreno;
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
