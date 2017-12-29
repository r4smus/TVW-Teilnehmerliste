package de.chris.tvwbackend.repositories;

import javax.transaction.Transactional;

import org.springframework.data.repository.CrudRepository;

import de.chris.tvwbackend.models.Trainer;

	
@Transactional
public interface TrainerRepository extends CrudRepository<Trainer, Integer>  {

}

