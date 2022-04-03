package com.mygym.model.Usuarios;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Nutricionista {
	@Id
	private long id;

	@Column
	private String nombre;

	@Column
	private String apellidos;
}
