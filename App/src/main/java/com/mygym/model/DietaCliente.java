package com.mygym.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.mygym.model.Usuarios.Cliente;

@Entity
public class DietaCliente {

	@Id
	private Integer id;

	@ManyToOne
	@JoinColumn(name = "cliente_id")
	private Cliente cliente;

	@ManyToOne
	@JoinColumn(name = "dieta_id")
	private Dieta dieta;

}
