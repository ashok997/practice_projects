package com.springboot.learningspring.busness.service;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.learningspring.business.domain.RoomReservation;
import com.springboot.learningspring.data.repository.GuestRepository;
import com.springboot.learningspring.data.repository.ReservationRepository;
import com.springboot.learningspring.data.repository.RoomRepository;

@Service
public class ReservationService {
	
	private final RoomRepository roomRepository;
	private final GuestRepository guestRepository;
	private final ReservationRepository reservationRepository;
	
	@Autowired
	public ReservationService (RoomRepository roomRepository, GuestRepository guestRepository, ReservationRepository reservationRepository) {
		this.roomRepository = roomRepository;
		this.guestRepository = guestRepository;
		this.reservationRepository = reservationRepository;
		
	}
	
	public List<RoomReservation> getRoomReservationForDate(Date date){
		return null;
		
	}
	

}
