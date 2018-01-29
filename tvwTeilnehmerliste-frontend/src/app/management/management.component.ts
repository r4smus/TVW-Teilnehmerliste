import { Component, OnInit } from '@angular/core';
import { Trainer } from '../trainer';
import { Participant } from '../participant';
import { TvwApiService } from '../tvw-api.service';
import { Training } from 'app/training';
import { log } from 'util';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent implements OnInit {

  trainers: Trainer[];
  participants: Participant[];
  trainings: Training[];

  showDeleteTrainerError = 'hideError';
  showDeleteParticipantError = 'hideError';


  constructor(
    private tvwApiService: TvwApiService,
              ) { }

  ngOnInit() {
    this.getTrainers();
    this.getParticipants();
    this.getTrainings();
  }

  getTrainers(): void {
    this.tvwApiService.getTrainers()
      .then(trainers => this.trainers = trainers);
  }

  getParticipants(): void {
    this.tvwApiService.getParticipants()
      .then(participants => this.participants = participants);
  }

  getTrainings(): void {
    this.tvwApiService.getTrainings()
      .then(trainings => this.trainings = trainings);
  }

  deleteTrainer(id: number): void {
    if(this.hasMemberATraining(id, true)){
      this.showDeleteTrainerError = 'showError';
      return;
    }
    this.tvwApiService.deleteTrainer(id)
      .then(() => {
        this.trainers = this.trainers.filter(trainer => trainer.id !== id);
      });
  }

  deleteParticipant(id: number): void {
    if(this.hasMemberATraining(id,false)){
      this.showDeleteParticipantError = 'showError';
      return;
    }
    this.tvwApiService.deleteParticipant(id)
      .then(() => {
        this.participants = this.participants.filter(participant => participant.id !== id);
      });
  }

  private hasMemberATraining(memberId: number, isTrainer): boolean {
    if(isTrainer){
        for (let training of this.trainings) {
            if(training.trainers.find(x => x.id == memberId)){
              return true;
            }
        }
    }else {
        for (let training of this.trainings) {
          if(training.participants.find(x => x.id == memberId)){
            return true;
          }
        }
    }
    return false;
}

}
