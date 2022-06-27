package com.mygym.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import com.mygym.model.usuarios.Cliente;

@Entity
public class ParametrosCliente {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

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

	@Column(length = 3000)
	private String alergias;

	@Column(length = 3000)
	private String lesiones;

	@OneToOne(mappedBy = "parametrosCliente")
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

	/**
	 * @return the alergias
	 */
	public String getAlergias() {
		return alergias;
	}

	/**
	 * @param alergias the alergias to set
	 */
	public void setAlergias(String alergias) {
		this.alergias = alergias;
	}

	/**
	 * @return the lesiones
	 */
	public String getLesiones() {
		return lesiones;
	}

	/**
	 * @param lesiones the lesiones to set
	 */
	public void setLesiones(String lesiones) {
		this.lesiones = lesiones;
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
