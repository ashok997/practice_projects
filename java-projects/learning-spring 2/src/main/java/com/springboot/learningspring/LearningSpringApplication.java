package com.springboot.learningspring;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.learningspring.data.entity.Room;
import com.springboot.learningspring.data.repository.RoomRepository;
import com.springboot.learningspring.data.entity.Guest;
import com.springboot.learningspring.data.entity.Reservation;
import com.springboot.learningspring.data.repository.GuestRepository;
import com.springboot.learningspring.data.repository.ReservationRepository;


@SpringBootApplication
public class LearningSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(LearningSpringApplication.class, args);
	}
	
	
}
