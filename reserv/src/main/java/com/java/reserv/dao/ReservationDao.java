package com.java.reserv.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.java.reserv.models.entity.ReservationEntity;

public interface ReservationDao extends JpaRepository<ReservationEntity, Integer> {

}
