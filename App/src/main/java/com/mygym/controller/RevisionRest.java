package com.mygym.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.mygym.model.Revision;
import com.mygym.service.RevisionService;

@RestController
@RequestMapping("revisiones")
public class RevisionRest {

	// Inyeccion de dependencia
	@Autowired
	private RevisionService revisionService;

	// Metodos de peticion HTTP

	@RequestMapping(value = "/create-update", method = RequestMethod.POST)
	public Optional<Revision> createUpdateDieta(@RequestBody Revision revision) {

		System.out.println(revision.getCliente());
		return Optional.ofNullable(revisionService.createUpdateRevision(revision));
	}

}
