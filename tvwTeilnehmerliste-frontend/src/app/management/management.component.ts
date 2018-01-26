import { Component, OnInit } from '@angular/core';
import { Trainer } from '../trainer';
import { Participant } from '../participant';
import { TvwApiService } from '../tvw-api.service';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent implements OnInit {

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

  deleteTrainer(id: number): void {
    this.tvwApiService.deleteTrainer(id)
      .then(() => {
        this.trainers = this.trainers.filter(trainer => trainer.id !== id);
      });

  }


}
