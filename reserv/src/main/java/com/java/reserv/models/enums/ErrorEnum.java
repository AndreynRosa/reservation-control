package com.java.reserv.models.enums;

public enum ErrorEnum {
	ROOM_NAME_NULL("Name can't is null"),
	VALUE_NULL("Value can't is null"), 
	RESEV_ROOM_NULL("Space not found"),
	RESEV_NUMBER_NULL("Reservation number can't is null"), 
	RESEV_NAME_NULL("Reservation person can't is null"), 
	RESEV_DATA_NULL("Reservation data can't is null ");
	
	public String error;

	ErrorEnum(String msgError) {
		error = msgError;
	}
}
