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
    // this.newTraining.trainers.push(this.getAllSelectedMembers(this.trainers));

  }

  private getAllSelectedMembers(members: Member[]): Member[] {
    let selectedMembers: Member[];
    members.forEach(element => {
      if (element.selected){
        selectedMembers.push(element);
      }
    });
    return selectedMembers;
  }
}
