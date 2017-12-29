package de.chris.tvwbackend.repositories;

import javax.transaction.Transactional;

import org.springframework.data.repository.CrudRepository;

import de.chris.tvwbackend.models.Participant;


@Transactional
public interface ParticipantRepository extends CrudRepository<Participant, Integer>  {

}