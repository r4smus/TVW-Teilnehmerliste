import { Component, OnInit } from '@angular/core';
import { Training } from '../training';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {

  trainings: Training[]= [
                          {id: 1,
                          date: '20.03.2017',
                          trainers: [
                                      { id: 1, firstName: 'Stefan', lastName: 'Böck', telNumber: '01254785565', selected: false},
                                      { id: 3, firstName: 'Tom', lastName: 'Körtge', telNumber: '01254785565', selected: false}
                                    ],
                          members: [
                                      {  id: 1, firstName: 'Christian', lastName: 'Kienle', telNumber: '08236473', selected: false},
                                      {  id: 2, firstName: 'Andreas', lastName: 'Haugg', telNumber: '0823652547', selected: false},
                                      {  id: 3, firstName: 'Fabian', lastName: 'Winzig', telNumber: '0823245645', selected: false}
                                   ],
                          showDetails: false},
                          {id: 2,
                          date: '11.04.2017',
                          trainers: [
                                      { id: 2, firstName: 'Martin', lastName: 'Bröll', telNumber: '01254785565', selected: false}
                                    ],
                          members: [
                                      {  id: 1, firstName: 'Christian', lastName: 'Kienle', telNumber: '08236473', selected: false},
                                      {  id: 2, firstName: 'Andreas', lastName: 'Haugg', telNumber: '0823652547', selected: false},
                                      {  id: 3, firstName: 'Fabian', lastName: 'Winzig', telNumber: '0823245645', selected: false},
                                      {  id: 4, firstName: 'Max', lastName: 'Groß', telNumber: '0823245645', selected: false},
                                      {  id: 5, firstName: 'Hans', lastName: 'Wurst', telNumber: '02016546566', selected: false}
                                   ],
                          showDetails: false}
                         ];


  constructor() { }

  ngOnInit() {
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
