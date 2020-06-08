package com.java.reserv;

import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertNull;
import static org.junit.Assert.assertTrue;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.java.reserv.models.dto.ReservationDto;
import com.java.reserv.models.entity.ReservationEntity;
import com.java.reserv.models.entity.SpaceEntity;
import com.java.reserv.models.enums.StatusEnum;
import com.java.reserv.services.SpacesService;
import com.java.reserv.services.ReservService;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = Application.class)
class ReservApplicationTests {

	@Autowired
	private SpacesService spacesService;

	@Autowired
	private ReservService reservService;

	@Test
	void sucessSaveRoom() throws Exception {
		SpaceEntity space = getSpace("Name", new BigDecimal(30.01), "Role is create");
		SpaceEntity createdRoom = spacesService.save(space);
		assertNotNull(createdRoom.getId());
	}

	@Test
	void sucessUpdateRoom() throws Exception {
		SpaceEntity space = getSpace("Name", new BigDecimal(30.01), "Role is create");
		SpaceEntity createdSpace = spacesService.save(space);
		SpaceEntity updateSpace = spacesService.findById(createdSpace.getId());
		updateSpace.setName("Updated name");
		updateSpace = spacesService.save(updateSpace);
		SpaceEntity sevedUpdatatedSpace = spacesService.findById(updateSpace.getId());
		assertTrue((sevedUpdatatedSpace.getId() == createdSpace.getId())
				&& (!createdSpace.getName().equalsIgnoreCase(sevedUpdatatedSpace.getName())));
	}

	@Test
	void sucessDeleteRoom() throws Exception {
		SpaceEntity room = getSpace("Name", new BigDecimal(30.01), "Role is create");
		SpaceEntity createdRoom = spacesService.save(room);
		spacesService.delete(createdRoom.getId().toString());
		SpaceEntity isDeltedRoom = spacesService.findById(createdRoom.getId());
		assertNull(isDeltedRoom);
	}

	@Test
	void succesListRoom() throws Exception {
		SpaceEntity space = getSpace("Name", new BigDecimal(30.01), "Role is create");
		SpaceEntity createdSpace01 = spacesService.save(space);
		SpaceEntity createdSpace02 = spacesService.save(space);
		spacesService.save(createdSpace01);
		spacesService.save(createdSpace02);
		List<SpaceEntity> spaces = spacesService.list();
		assertTrue(spaces.size() > 1);
	}

	@Test
	void suceesSaveReservation() throws Exception {
		SpaceEntity space = getSpace("With reserv", new BigDecimal(30.01), "Role is create");
		SpaceEntity createdSpace = spacesService.save(space);

		ReservationEntity reservRomm = getReservRoom();
		ReservationDto createdReserv = reservService.save(reservRomm, createdSpace.getId());
		assertNotNull(createdReserv.getId());
	}

	@Test
	void sucessUpdateReservation() throws Exception {
		SpaceEntity space = getSpace("With reserv", new BigDecimal(30.01), "Role is create");
		SpaceEntity createdSpace = spacesService.save(space);

		ReservationEntity reservRomm = getReservRoom();
		ReservationDto createdReserv = reservService.save(reservRomm, createdSpace.getId());
		ReservationEntity savedReserv = reservService.findById(createdReserv.getId());
		savedReserv.setNumber("309");
		savedReserv.setPerson("Updated Person");

		ReservationDto updatedReserv = reservService.save(savedReserv, createdSpace.getId());
		assertNotNull((updatedReserv.getId()));
	}

	@Test
	void succesDeleteReservatio() throws Exception {
		SpaceEntity space = getSpace("Name", new BigDecimal(30.01), "Role is create");
		SpaceEntity createdSpace = spacesService.save(space);

		ReservationEntity reservRomm = getReservRoom();
		ReservationDto createdReserv = reservService.save(reservRomm, createdSpace.getId());
		reservService.delete(createdReserv.getId().toString());

	}

	private ReservationEntity getReservRoom() {
		ReservationEntity reserv = new ReservationEntity();
		reserv.setNumber("320 a");
		reserv.setPerson("Carla");
		reserv.setReservDate(new Date());
		reserv.setStatus(StatusEnum.pendig.toString());
		return reserv;
	}

	private SpaceEntity getSpace(String name, BigDecimal vauleOfRent, String roles) {
		SpaceEntity spacem = new SpaceEntity();
		spacem.setName(name);
		spacem.setVauleOfRent(vauleOfRent);
		spacem.setRoles(roles);
		return spacem;
	}

}
