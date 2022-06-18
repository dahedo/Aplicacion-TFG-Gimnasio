package com.mygym.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.mygym.model.usuarios.Cliente;

@Entity
public class Revision {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	@Column
	private double peso;

	@JsonFormat(pattern = "dd/MM/yyyy")
	@Column(nullable = false)
	private Date fechaRevision;

	@Column
	private double cuello;
	@Column
	private double hombros;
	@Column
	private double pecho;
	@Column
	private double cintura;
	@Column
	private double antebrazoDerecho;
	@Column
	private double antebrazoIzquierdo;

	@Column
	private double musloDerecho;
	@Column
	private double musloIzquierdo;

	@Column
	private double bicepsDerecho;
	@Column
	private double bicepsIzquierdo;
	@Column
	private double cadera;

	@Column
	private String comentarios;

	@ManyToOne
	@JsonBackReference
	@JoinColumn(name = "cliente_id", nullable = true)
	private Cliente cliente;

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
	 * @return the peso
	 */
	public double getPeso() {
		return peso;
	}

	/**
	 * @param peso the peso to set
	 */
	public void setPeso(double peso) {
		this.peso = peso;
	}

	/**
	 * @return the fechaRevision
	 */
	public Date getFechaRevision() {
		return fechaRevision;
	}

	/**
	 * @param fechaRevision the fechaRevision to set
	 */
	public void setFechaRevision(Date fechaRevision) {
		this.fechaRevision = fechaRevision;
	}

	/**
	 * @return the cuello
	 */
	public double getCuello() {
		return cuello;
	}

	/**
	 * @param cuello the cuello to set
	 */
	public void setCuello(double cuello) {
		this.cuello = cuello;
	}

	/**
	 * @return the hombros
	 */
	public double getHombros() {
		return hombros;
	}

	/**
	 * @param hombros the hombros to set
	 */
	public void setHombros(double hombros) {
		this.hombros = hombros;
	}

	/**
	 * @return the pecho
	 */
	public double getPecho() {
		return pecho;
	}

	/**
	 * @param pecho the pecho to set
	 */
	public void setPecho(double pecho) {
		this.pecho = pecho;
	}

	/**
	 * @return the cintura
	 */
	public double getCintura() {
		return cintura;
	}

	/**
	 * @param cintura the cintura to set
	 */
	public void setCintura(double cintura) {
		this.cintura = cintura;
	}

	/**
	 * @return the antebrazoDerecho
	 */
	public double getAntebrazoDerecho() {
		return antebrazoDerecho;
	}

	/**
	 * @param antebrazoDerecho the antebrazoDerecho to set
	 */
	public void setAntebrazoDerecho(double antebrazoDerecho) {
		this.antebrazoDerecho = antebrazoDerecho;
	}

	/**
	 * @return the antebrazoIzquierdo
	 */
	public double getAntebrazoIzquierdo() {
		return antebrazoIzquierdo;
	}

	/**
	 * @param antebrazoIzquierdo the antebrazoIzquierdo to set
	 */
	public void setAntebrazoIzquierdo(double antebrazoIzquierdo) {
		this.antebrazoIzquierdo = antebrazoIzquierdo;
	}

	/**
	 * @return the musloDerecho
	 */
	public double getMusloDerecho() {
		return musloDerecho;
	}

	/**
	 * @param musloDerecho the musloDerecho to set
	 */
	public void setMusloDerecho(double musloDerecho) {
		this.musloDerecho = musloDerecho;
	}

	/**
	 * @return the musloIzquierdo
	 */
	public double getMusloIzquierdo() {
		return musloIzquierdo;
	}

	/**
	 * @param musloIzquierdo the musloIzquierdo to set
	 */
	public void setMusloIzquierdo(double musloIzquierdo) {
		this.musloIzquierdo = musloIzquierdo;
	}

	/**
	 * @return the bicepsDerecho
	 */
	public double getBicepsDerecho() {
		return bicepsDerecho;
	}

	/**
	 * @param bicepsDerecho the bicepsDerecho to set
	 */
	public void setBicepsDerecho(double bicepsDerecho) {
		this.bicepsDerecho = bicepsDerecho;
	}

	/**
	 * @return the bicepsIzquierdo
	 */
	public double getBicepsIzquierdo() {
		return bicepsIzquierdo;
	}

	/**
	 * @param bicepsIzquierdo the bicepsIzquierdo to set
	 */
	public void setBicepsIzquierdo(double bicepsIzquierdo) {
		this.bicepsIzquierdo = bicepsIzquierdo;
	}

	/**
	 * @return the cadera
	 */
	public double getCadera() {
		return cadera;
	}

	/**
	 * @param cadera the cadera to set
	 */
	public void setCadera(double cadera) {
		this.cadera = cadera;
	}

	/**
	 * @return the comentarios
	 */
	public String getComentarios() {
		return comentarios;
	}

	/**
	 * @param comentarios the comentarios to set
	 */
	public void setComentarios(String comentarios) {
		this.comentarios = comentarios;
	}

	/**
	 * @return the cliente
	 */
	public Cliente getCliente() {
		return cliente;
	}

	/**
	 * @param cliente the cliente to set
	 */
	public void setCliente(Cliente cliente) {
		this.cliente = cliente;
	}

}
