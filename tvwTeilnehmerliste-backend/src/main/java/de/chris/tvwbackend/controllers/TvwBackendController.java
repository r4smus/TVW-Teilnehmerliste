package de.chris.tvwbackend.controllers;


import java.util.Date;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import de.chris.tvwbackend.models.Member;
import de.chris.tvwbackend.models.Trainer;
import de.chris.tvwbackend.models.Training;
import de.chris.tvwbackend.repositories.TrainingRepository;

@RestController
@RequestMapping("/tvw-api")
@CrossOrigin("*")
public class TvwBackendController {
	
    
    @Autowired
    TrainingRepository trainingRepository;
    
    private static final boolean INIT_TEST_DATA = true; 
    
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
    
//    public Iterable<Member> getAllTrainers(){
//    	return 
//    }
    
    private void initTestData1() {
    	//Training 1
    	Training training1 = new Training();
		training1.setDate(new Date());
		
		Member member1 = new Member();
		member1.setFirstName("Chris");
		member1.setLastName("Kienle");
		Member member2 = new Member();
		member2.setFirstName("Gudrun");
		member2.setLastName("Kienle");
		
		training1.getMembers().add(member1);
		training1.getMembers().add(member2);
		
		Trainer trainer1 = new Trainer();
		trainer1.setFirstName("Hans");
		trainer1.setLastName("Mustermann");
		
		training1.getTrainers().add(trainer1);
		
		trainingRepository.save(training1);
		
		//Training 2
		Training training2 = new Training();
		training2.setDate(new Date());
		
		Member member3 = new Member();
		member3.setFirstName("Peter");
		member3.setLastName("Pan");
		Member member4 = new Member();
		member4.setFirstName("Maria");
		member4.setLastName("Meier");
		
		training2.getMembers().add(member3);
		training2.getMembers().add(member4);
		
		Trainer trainer2 = new Trainer();
		trainer2.setFirstName("Stefan");
		trainer2.setLastName("Schmid");
		
		training2.getTrainers().add(trainer2);
		
		trainingRepository.save(training2);
    }
}