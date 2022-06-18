package com.mygym.service;

import java.util.List;

import com.mygym.model.nutricion.AlimentacionDiaria;

public interface AlimentacionDiariaService {

	public AlimentacionDiaria createUpdateAlimentacionDiaria(AlimentacionDiaria alimentacionDiaria);

	public List<AlimentacionDiaria> getAllAlimentacionDiaria();

}
