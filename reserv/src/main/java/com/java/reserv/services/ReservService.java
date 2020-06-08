package com.java.reserv.services;

import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.java.reserv.dao.ReservationDao;
import com.java.reserv.models.dto.ReservationDto;
import com.java.reserv.models.entity.ReservationEntity;
import com.java.reserv.models.entity.SpaceEntity;
import com.java.reserv.models.enums.ErrorEnum;

@Service
public class ReservService {

	static Logger logger = Logger.getLogger(SpacesService.class.getName());

	@Autowired
	private SpacesService spacesService;

	@Autowired
	private ReservationDao dao;

	public ReservationEntity save(ReservationEntity reservation, Integer roomId) throws Exception {
		logger.info("Start save registration");
		SpaceEntity space = spacesService.findById(roomId);
		assertsEntity(reservation, space);
		reservation.setSpace(space);

		if (null != reservation.getId()) {
			logger.info("Updated registration " + reservation.getId());
			return dao.save(reservation);
		}
		logger.info("Create registration ");
		return dao.save(reservation);
	}

	private void assertsEntity(ReservationEntity reservation, SpaceEntity space) throws Exception {
		if (null == space) {
			throw new Exception(ErrorEnum.RESEV_ROOM_NULL.toString());
		}
		if (null == reservation.getPerson()) {
			throw new Exception(ErrorEnum.RESEV_NAME_NULL.toString());
		}

		if (null == reservation.getReservDate()) {
			throw new Exception(ErrorEnum.RESEV_DATA_NULL.toString());
		}
	}

	public ReservationEntity findById(Integer id) {
		Optional<ReservationEntity> opt = dao.findById(id);
		return opt.orElse(null);
	}

	public void delete(ReservationEntity reserv) {
		dao.delete(reserv);

	}

	public List<ReservationDto> listAll() {
		List<ReservationEntity> reservations = dao.findAll();
		return getDtoList(reservations);
	}

	private List<ReservationDto> getDtoList(List<ReservationEntity> reservations) {
		List<ReservationDto> resvervationsDto = new ArrayList<ReservationDto>();
		reservations.stream().forEach(reservation -> {
			ReservationDto dto = buildResvationsDto(reservation);
			resvervationsDto.add(dto);
		});
		return resvervationsDto;
	}

	private ReservationDto buildResvationsDto(ReservationEntity reservation) {
		SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
		Calendar cal = Calendar.getInstance();

		System.out.println(cal.getTime());
		ReservationDto dto = new ReservationDto();
		dto.setId(reservation.getId());
		dto.setNumber(reservation.getNumber());
		dto.setPerson(reservation.getPerson());
		dto.setReservDate(cal.getTime());
		dto.setRoomName(reservation.getSpace().getName());
		dto.setRoomId(reservation.getSpace().getId());
		dto.setFormmatedDate(formatter.format(cal.getTime()));
		dto.setValue(reservation.getSpace().getVauleOfRent());
		return dto;
	}
}
