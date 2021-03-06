package de.chris.tvwbackend.controllers;


import java.util.Date;

import javax.annotation.PostConstruct;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import de.chris.tvwbackend.models.Participant;
import de.chris.tvwbackend.models.Trainer;
import de.chris.tvwbackend.models.Training;
import de.chris.tvwbackend.repositories.ParticipantRepository;
import de.chris.tvwbackend.repositories.TrainerRepository;
import de.chris.tvwbackend.repositories.TrainingRepository;

@RestController
@RequestMapping("/tvw-api")
@CrossOrigin("*")
public class TvwBackendController {
	
    
    @Autowired
    TrainingRepository trainingRepository;
    
    @Autowired
    TrainerRepository trainerRepository;
    
    @Autowired
    ParticipantRepository participantRepository;
    
    private static final boolean INIT_TEST_DATA = false; 
    
    @PostConstruct
	public void  setup() {
    	if(INIT_TEST_DATA) {
    		initTestData1();
    	}
	}

    @GetMapping("/trainings")
    public Iterable<Training> getAllTrainings() {
        return trainingRepository.findAll();
    }

    @GetMapping(value="/trainings/{id}")
    public ResponseEntity<Training> getTrainingById(@PathVariable("id") Integer id) {
        Training training = trainingRepository.findOne(id);
        if(training == null) {
            return new ResponseEntity<Training>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<Training>(training, HttpStatus.OK);
        }
    }
    
    @GetMapping(value="/trainer/{id}")
    public ResponseEntity<Trainer> getTrainerById(@PathVariable("id") Integer id) {
        Trainer trainer = trainerRepository.findOne(id);
        if(trainer == null) {
            return new ResponseEntity<Trainer>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<Trainer>(trainer, HttpStatus.OK);
        }
    }
    
    @GetMapping(value="/trainers")
    public Iterable<Trainer> getAllTrainers(){
    	return  trainerRepository.findAll();
    }
    
    @GetMapping(value="/participants")
    public Iterable<Participant> getAllParticipants(){
    	return  participantRepository.findAll();
    }
    
    @PostMapping("/trainings")
    public Training createTraining(@Valid @RequestBody Training training) {
        return trainingRepository.save(training);
    }
    
    @PostMapping("/createTrainer")
    public Trainer createTrainer(@Valid @RequestBody Trainer trainer) {
        return trainerRepository.save(trainer);
    }
    
    @PostMapping("/createParticipant")
    public Participant createParticipant(@Valid @RequestBody Participant participant) {
        return participantRepository.save(participant);
    }
    
    @DeleteMapping(value="/deleteTrainer/{id}")
    public void deleteTrainer(@PathVariable("id") Integer id) {
        trainerRepository.delete(id);
    }
    
    @DeleteMapping(value="/deleteParticipant/{id}")
    public void deleteParticipant(@PathVariable("id") Integer id) {
        participantRepository.delete(id);
    }
    
    private void initTestData1() {
    	//Training 1
    	Training training1 = new Training();
		training1.setDate(new Date());
		
		Participant part1 = new Participant();
		part1.setFirstName("Chris");
		part1.setLastName("Kienle");
		Participant part2 = new Participant();
		part2.setFirstName("Gudrun");
		part2.setLastName("Kienle");
		
		training1.getParticipants().add(part1);
		training1.getParticipants().add(part2);
		
		Trainer trainer1 = new Trainer();
		trainer1.setFirstName("Hans");
		trainer1.setLastName("Mustermann");
		
		training1.getTrainers().add(trainer1);
		
		trainingRepository.save(training1);
		
		//Training 2
		Training training2 = new Training();
		training2.setDate(new Date());
		
		Participant part3 = new Participant();
		part3.setFirstName("Peter");
		part3.setLastName("Pan");
		Participant part4 = new Participant();
		part4.setFirstName("Maria");
		part4.setLastName("Meier");
		
		training2.getParticipants().add(part3);
		training2.getParticipants().add(part4);
		
		Trainer trainer2 = new Trainer();
		trainer2.setFirstName("Stefan");
		trainer2.setLastName("Schmid");
		
		training2.getTrainers().add(trainer2);
		
		trainingRepository.save(training2);
    }
}