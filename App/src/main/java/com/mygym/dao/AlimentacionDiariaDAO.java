package com.mygym.dao;

import java.util.List;

import com.mygym.model.AlimentacionDiaria;

public interface AlimentacionDiariaDAO {

	public AlimentacionDiaria createUpdateAlimentacionDiaria(AlimentacionDiaria alimentacionDiaria);

	public List<AlimentacionDiaria> getAllAlimentacionDiaria();

}
