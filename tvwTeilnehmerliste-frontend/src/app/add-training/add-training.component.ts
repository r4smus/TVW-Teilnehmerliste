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
}
