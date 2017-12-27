package de.chris.tvwbackend.repositories;

import javax.transaction.Transactional;

import org.springframework.data.repository.CrudRepository;

import de.chris.tvwbackend.models.Training;


@Transactional
public interface TrainingRepository extends CrudRepository<Training, Integer>  {

}
