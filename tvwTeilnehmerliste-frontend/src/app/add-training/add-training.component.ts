import { Component, OnInit } from '@angular/core';
import { Member } from '../member';
import { Trainer } from '../trainer';
import { Participant } from '../participant';

import { TvwApiService } from '../tvw-api.service';
import { forEach } from '@angular/router/src/utils/collection';
import { Training } from 'app/training';

@Component({
  selector: 'app-add-training',
  templateUrl: './add-training.component.html',
  styleUrls: ['./add-training.component.css']
})
export class AddTrainingComponent implements OnInit {

  trainers: Trainer[];
  participants: Participant[];
  newTraining: Training = new Training();


  constructor(
    private tvwApiService: TvwApiService,
  ) { }

  ngOnInit() {
    this.getTrainers();
    this.getParticipants();
  }

  getTrainers(): void {
    this.tvwApiService.getTrainers()
      .then(trainers => this.trainers = trainers);
  }

  getParticipants(): void {
    this.tvwApiService.getParticipants()
      .then(participants => this.participants = participants);
  }

  saveTraining(): void {
    this.newTraining.trainers = this.getAllSelectedTrainers(this.trainers);
    this.newTraining.participants = this.getAllSelectedParticipants(this.participants);
    if(this.newTraining.trainers.length == 0 || this.newTraining.participants.length == 0){
      return;
    }
    this.tvwApiService.createTraining(this.newTraining);
  }

  private getAllSelectedTrainers(trainers: Trainer[]): Trainer[] {
    var selectedTrainers = new Array<Trainer>();
    trainers.forEach(element => {
      debugger;
      if (element.selected){
        selectedTrainers.push(element);
      }
    });
    return selectedTrainers;
  }

  private getAllSelectedParticipants(participants: Participant[]): Participant[] {
    var selectedParticipants = new Array<Participant>();
    participants.forEach(element => {
      if (element.selected){
        selectedParticipants.push(element);
      }
    });
    return selectedParticipants;
  }
}
