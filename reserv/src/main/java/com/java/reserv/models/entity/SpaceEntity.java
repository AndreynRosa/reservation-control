package com.java.reserv.models.entity;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

/**
 * @author Andrey Rosa
 *
 */

@Entity
@Table(name = "SPACES")
public class SpaceEntity implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;

	private String name;

	@Column(name = "value_of_rent")
	private BigDecimal vauleOfRent;

	@Column(name = "roles", length = 255)
	private String roles;

	
	@OneToMany
	private List<ReservationEntity> reserves;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public BigDecimal getVauleOfRent() {
		return vauleOfRent;
	}

	public void setVauleOfRent(BigDecimal vauleOfRent) {
		this.vauleOfRent = vauleOfRent;
	}

	public String getRoles() {
		return roles;
	}

	public void setRoles(String roles) {
		this.roles = roles;
	}

	public List<ReservationEntity> getReserves() {
		if (reserves == null) {
			reserves = new ArrayList<ReservationEntity>();
		}
		return reserves;
	}

	public void setReserves(List<ReservationEntity> reserves) {
		this.reserves = reserves;
	}

}
