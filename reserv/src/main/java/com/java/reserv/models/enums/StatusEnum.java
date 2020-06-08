package com.java.reserv.models.enums;

public enum StatusEnum {
	confirm(0), pendig(1), canceled(2);
	public int key;

	StatusEnum(int key) {
		this.key = key;
	}
}