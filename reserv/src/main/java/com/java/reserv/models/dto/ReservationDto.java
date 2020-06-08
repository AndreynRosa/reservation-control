package com.java.reserv.models.dto;

import java.util.Date;

public class ReservationDto {

	private Date reservDate;

	private String person;

	private String number;

	private Integer roomId;

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

}
