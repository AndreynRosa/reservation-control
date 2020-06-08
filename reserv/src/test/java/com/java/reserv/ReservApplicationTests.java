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
		SpaceEntity space = getSpace("Academia", new BigDecimal(50.01), "Leve sua mascára.");
		SpaceEntity createdRoom = spacesService.save(space);
		assertNotNull(createdRoom.getId());
	}

	@Test
	void sucessUpdateRoom() throws Exception {
		SpaceEntity space = getSpace("Churrasqueira", new BigDecimal(00), "O que for encontrado será deixado na portaria.");
		SpaceEntity createdSpace = spacesService.save(space);
		SpaceEntity updateSpace = spacesService.findById(createdSpace.getId());
		updateSpace.setName("Churrasqueira A");
		updateSpace = spacesService.save(updateSpace);
		SpaceEntity sevedUpdatatedSpace = spacesService.findById(updateSpace.getId());
		assertTrue((sevedUpdatatedSpace.getId() == createdSpace.getId())
				&& (!createdSpace.getName().equalsIgnoreCase(sevedUpdatatedSpace.getName())));
	}

	@Test
	void sucessDeleteRoom() throws Exception {
		SpaceEntity room = getSpace("Cobertura da piscina", new BigDecimal(600.01), "A faxinha é reposabilidade do quem utiliza!");
		SpaceEntity createdRoom = spacesService.save(room);
		spacesService.delete(createdRoom.getId().toString());
		SpaceEntity isDeltedRoom = spacesService.findById(createdRoom.getId());
		assertNull(isDeltedRoom);
	}

	@Test
	void succesListRoom() throws Exception {
		SpaceEntity space = getSpace("Sala de reunião", new BigDecimal(15.27), "Apagar as luzes.");
		SpaceEntity space2 = getSpace("Sala de jogos", new BigDecimal(89.27), "Desligar os aparelhos. Guardar os tabuleiros");
		SpaceEntity createdSpace01 = spacesService.save(space);
		SpaceEntity createdSpace02 = spacesService.save(space2);
		spacesService.save(createdSpace01);
		spacesService.save(createdSpace02);
		List<SpaceEntity> spaces = spacesService.list();
		assertTrue(spaces.size() > 1);
	}

	@Test
	void suceesSaveReservation() throws Exception {
		SpaceEntity space = getSpace("Piscina", new BigDecimal(15.37), "Tomar ducha antes de entrar. Limpar os pé. Proibido crianças menoras de 8 anos sozinha");
		SpaceEntity createdSpace = spacesService.save(space);

		ReservationEntity reservSpace = getReservRoom();
		ReservationDto createdReserv = reservService.save(reservSpace, createdSpace.getId());
		assertNotNull(createdReserv.getId());
	}

	@Test
	void sucessUpdateReservation() throws Exception {
		SpaceEntity space = getSpace("Salão de Festas", new BigDecimal(30.01), "Empilhar cadeiras. Fechar as janelas.");
		SpaceEntity createdSpace = spacesService.save(space);

		ReservationEntity reservRomm = getReservRoom();
		ReservationDto createdReserv = reservService.save(reservRomm, createdSpace.getId());
		ReservationEntity savedReserv = reservService.findById(createdReserv.getId());
		savedReserv.setNumber("309");
		savedReserv.setPerson("Carlinha");
		savedReserv.setStatus(StatusEnum.confirm.toString());

		ReservationDto updatedReserv = reservService.save(savedReserv, createdSpace.getId());
		assertNotNull((updatedReserv.getId()));
	}

	@Test
	void succesDeleteReservatio() throws Exception {
		SpaceEntity space = getSpace("Sala de videos", new BigDecimal(10.50), "Arrumar as almofadas.");
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
