package com.springboot.learningspring.busness.service;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.learningspring.business.domain.RoomReservation;
import com.springboot.learningspring.data.entity.Reservation;
import com.springboot.learningspring.data.entity.Room;
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
		Iterable<Room> rooms = this.roomRepository.findAll();
		
		Map<Long, RoomReservation> roomReservationMap = new HashMap();
		
		rooms.forEach(room ->{
			RoomReservation roomReservation = new RoomReservation();
			roomReservation.setRoomId(room.getRoomID());
			roomReservation.setRoomName(room.getRoomName());
			roomReservation.setRoomNumber(room.getRoomNumber());
			roomReservationMap.put(room.getRoomID(), roomReservation);
			
		});
		
		Iterable<Reservation> reservations = this.reservationRepository.findReservationByReservationDate(new java.sql.Date(date.getTime()));
		
	
		return null;
		
	}
	

}
