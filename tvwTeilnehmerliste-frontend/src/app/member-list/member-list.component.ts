import { Component, OnInit } from '@angular/core';
import { Training } from '../training';
import { TvwApiService } from '../tvw-api.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {

  trainings: Training[];


  constructor(
    private tvwApiService: TvwApiService,
  ) { }

  ngOnInit() {
    this.getTrainings();
  }

  getTrainings(): void {
    this.tvwApiService.getTrainings()
      .then(trainings => this.trainings = trainings);
  }

  showDetails(training: Training) {
    console.log('show details');
    if (training.showDetails) {
      training.showDetails = false;
    }else {
        training.showDetails = true;
    }
  }

  deleteTraining(training: Training) {
    let index = this.trainings.indexOf(training, 0);
    if ( index > -1 ) {
      this.trainings.splice(index, 1);
    }
  }

}
