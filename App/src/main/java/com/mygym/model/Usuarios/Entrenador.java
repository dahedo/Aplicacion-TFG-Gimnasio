package com.mygym.model.Usuarios;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.PrimaryKeyJoinColumn;

@Entity
@PrimaryKeyJoinColumn(name = "user_id")
public class Entrenador extends Usuario {

	@Column
	private String nombre;

	@Column
	private String apellidos;

	@OneToMany(mappedBy = "entrenador")
	private Set<Cliente> clientes;

}
