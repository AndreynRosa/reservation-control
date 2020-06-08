package com.java.reserv.services;

import java.util.List;
import java.util.Optional;
import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.java.reserv.dao.SpacesDao;
import com.java.reserv.models.entity.SpaceEntity;
import com.java.reserv.models.enums.ErrorEnum;

@Service
public class SpacesService {

	@Autowired
	private SpacesDao dao;

	static Logger logger = Logger.getLogger(SpacesService.class.getName());

	public SpaceEntity save(SpaceEntity room) throws Exception {
		logger.info("Start save room");
		assertsRoom(room);
		if (isNewUser(room)) {
			logger.info("New Room registred");
			return dao.save(room);
		} else {
			logger.info("Update Room registred at id" + room.getId());
			return dao.save(room);
		}
	}

	private void assertsRoom(SpaceEntity room) throws Exception {
		if (null == room.getName() ) {
			throw new Exception(ErrorEnum.ROOM_NAME_NULL.toString());
		}
	}

	private boolean isNewUser(SpaceEntity room) {
		return  null == room.getId() ;
	}

	public SpaceEntity findById(Integer id) {
		Optional<SpaceEntity> opt = dao.findById(id);
		return opt.orElse(null);
	}

	public void delete(SpaceEntity room) {
		dao.delete(room);
	}

	public List<SpaceEntity> list() {
		List<SpaceEntity> rooms = dao.findAll();
		return rooms;
	}

}
