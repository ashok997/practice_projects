package com.springboot.learningspring.data.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="RESERVATION")
public class Reservation {
	
			@Id
			@Column(name="RESERVATION_ID")
			@GeneratedValue(strategy =GenerationType.AUTO)
			private long reservationId;
			@Column(name ="ROOM_ID")
			private int roomId;
			@Column(name ="GUEST_ID")
			private int guestId;
			@Column(name ="RES_DATE")
			private Date date;
			
			public long getReservationId() {
				return reservationId;
			}
			public void setReservationId(long reservationId) {
				this.reservationId = reservationId;
			}
			public int getRoomId() {
				return roomId;
			}
			public void setRoomId(int roomId) {
				this.roomId = roomId;
			}
			public int getGuestId() {
				return guestId;
			}
			public void setGuestId(int guestId) {
				this.guestId = guestId;
			}
			public Date getDate() {
				return date;
			}
			public void setDate(Date date) {
				this.date = date;
			}

			
}
