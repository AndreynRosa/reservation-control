package com.java.reserv.controllers;

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
import com.java.reserv.services.ReservService;

@Controller
@RequestMapping(value = "/v1/resvation")
public class ReservationController {
	
	@Autowired
	private ReservService reservService;

	@ResponseBody
	@Transactional(rollbackOn = Throwable.class)
	@RequestMapping(value = "", method = RequestMethod.POST, produces = "application/json")
	public ModelAndView save(@RequestParam String spaceId, @RequestBody ReservationEntity reserv) {

		ModelAndView modelAndView = new ModelAndView(new MappingJackson2JsonView());
		System.out.println("aqui" + spaceId);
		try {
			ReservationEntity reservation = reservService.save(reserv, Integer.parseInt(spaceId));
			modelAndView.addObject("data", reservation);
			modelAndView.addObject("error", null);
			return modelAndView;
		} catch (Exception e) {
			modelAndView.addObject("data", null);
			modelAndView.addObject("error", e);
			return modelAndView;

		}
	}

}
