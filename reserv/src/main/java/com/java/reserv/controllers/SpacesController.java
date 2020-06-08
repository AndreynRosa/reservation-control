package com.java.reserv.controllers;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.json.MappingJackson2JsonView;

import com.java.reserv.models.entity.ReservationEntity;
import com.java.reserv.models.entity.SpaceEntity;
import com.java.reserv.services.SpacesService;

@Controller
@RequestMapping(value = "/v1/spaces")
public class SpacesController {

	@Autowired
	private SpacesService service;

	@ResponseBody
	@Transactional(rollbackOn = Throwable.class)
	@RequestMapping(value = "", method = RequestMethod.POST, produces = "application/json")
	public ModelAndView save(@RequestBody SpaceEntity space) {

		ModelAndView modelAndView = new ModelAndView(new MappingJackson2JsonView());
		try {
			SpaceEntity reservation = service.save(space);
			modelAndView.addObject("data", reservation);
			modelAndView.addObject("error", null);
			return modelAndView;
		} catch (Exception e) {
			modelAndView.addObject("data", null);
			modelAndView.addObject("error", e);
			return modelAndView;

		}
	}

	@ResponseBody
	@Transactional(rollbackOn = Throwable.class)
	@RequestMapping(value = "", method = RequestMethod.GET, produces = "application/json")
	public ModelAndView listAll() {

		ModelAndView modelAndView = new ModelAndView(new MappingJackson2JsonView());
		try {
			List<SpaceEntity> reservation = service.list();
			modelAndView.addObject("data", reservation);
			modelAndView.addObject("error", null);
			return modelAndView;
		} catch (Exception e) {
			modelAndView.addObject("data", null);
			modelAndView.addObject("error", e);
			return modelAndView;

		}
	}

	@ResponseBody
	@Transactional(rollbackOn = Throwable.class)
	@RequestMapping(value = "", method = RequestMethod.DELETE, produces = "application/json")
	public ModelAndView delete(@RequestParam String id) {

		ModelAndView modelAndView = new ModelAndView(new MappingJackson2JsonView());
		try {
			service.delete(id);
			modelAndView.addObject("data", "Delete Sucees");
			modelAndView.addObject("error", null);
			return modelAndView;
		} catch (Exception e) {
			modelAndView.addObject("data", null);
			modelAndView.addObject("error", e);
			return modelAndView;

		}
	}

}
