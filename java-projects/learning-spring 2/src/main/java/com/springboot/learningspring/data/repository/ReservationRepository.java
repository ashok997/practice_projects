package com.springboot.learningspring.data.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.springboot.learningspring.data.entity.Reservation;

@Repository
public interface ReservationRepository extends CrudRepository<Reservation, Long>{
}
