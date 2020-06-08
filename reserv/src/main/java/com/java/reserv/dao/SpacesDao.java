package com.java.reserv.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.java.reserv.models.entity.SpaceEntity;

public interface SpacesDao extends JpaRepository <SpaceEntity, Integer> {

}
