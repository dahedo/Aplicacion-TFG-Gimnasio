package com.mygym.service.impl;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mygym.dao.RevisionDAO;
import com.mygym.model.Revision;
import com.mygym.service.RevisionService;

@Service
@Transactional
public class RevisionServiceImpl implements RevisionService {

	@Autowired
	private RevisionDAO dao;

	@Override
	public Revision createUpdateRevision(Revision revision) {

		return dao.createUpdateRevision(revision);
	}

}
