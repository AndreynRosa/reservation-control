package com.java.reserv.models.dto;

import java.math.BigDecimal;
import java.util.Date;

public class ReservationDto {

	private Integer id;
	
	private Date reservDate;

	private String person;

	private String number;

	private Integer roomId;
	
	private String roomName;

	private String formmatedDate;
	
	private BigDecimal value;
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Date getReservDate() {
		return reservDate;
	}

	public void setReservDate(Date reservDate) {
		this.reservDate = reservDate;
	}

	public String getPerson() {
		return person;
	}

	public void setPerson(String person) {
		this.person = person;
	}

	public String getNumber() {
		return number;
	}

	public void setNumber(String number) {
		this.number = number;
	}

	public Integer getRoomId() {
		return roomId;
	}

	public void setRoomId(Integer roomId) {
		this.roomId = roomId;
	}

	public String getRoomName() {
		return roomName;
	}

	public void setRoomName(String roomName) {
		this.roomName = roomName;
	}

	public String getFormmatedDate() {
		return formmatedDate;
	}

	public void setFormmatedDate(String formmatedDate) {
		this.formmatedDate = formmatedDate;
	}

	public BigDecimal getValue() {
		return value;
	}

	public void setValue(BigDecimal value) {
		this.value = value;
	}

	
}
