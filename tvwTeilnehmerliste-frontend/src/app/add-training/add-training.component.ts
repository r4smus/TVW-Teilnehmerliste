import { Component, OnInit } from '@angular/core';
import { Member } from '../member';
import { Trainer } from '../trainer';
import { Participant } from '../participant';

import { TvwApiService } from '../tvw-api.service';

@Component({
  selector: 'app-add-training',
  templateUrl: './add-training.component.html',
  styleUrls: ['./add-training.component.css']
})
export class AddTrainingComponent implements OnInit {

  trainers: Trainer[];
  participants: Participant[];


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

  selectTrainer(trainer: Trainer) {
    if (trainer.selected) {
      trainer.selected = false;
    }else{
      trainer.selected = true;
    }
  }

  styleTrainer(trainer: Trainer): string {
    if (trainer.selected === false) {
      return 'notSelectedBackground';
    } else {
      return 'selectedBackground';
    }
  }

  selectParticipant(participant: Participant) {
    if (participant.selected) {
      participant.selected = false;
    }else{
      participant.selected = true;
    }
  }

  styleParticipant(participant: Participant): string {
    if (participant.selected === false) {
      return 'notSelectedBackground';
    } else {
      return 'selectedBackground';
    }
  }

}
