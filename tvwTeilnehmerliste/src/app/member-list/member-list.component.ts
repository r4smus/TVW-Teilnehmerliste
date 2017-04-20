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
                                      { id: 1, firstName: 'Stefan', lastName: 'Böck', telNumber: '01254785565'},
                                      { id: 3, firstName: 'Tom', lastName: 'Körtge', telNumber: '01254785565'}
                                    ],
                          members: [
                                      {  id: 1, firstName: 'Christian', lastName: 'Kienle', telNumber: '08236473'},
                                      {  id: 2, firstName: 'Andreas', lastName: 'Haugg', telNumber: '0823652547'},
                                      {  id: 3, firstName: 'Fabian', lastName: 'Winzig', telNumber: '0823245645'}
                                   ],
                          showDetails: false},
                          {id: 2,
                          date: '11.04.2017',
                          trainers: [
                                      { id: 2, firstName: 'Martin', lastName: 'Bröll', telNumber: '01254785565'}
                                    ],
                          members: [
                                      {  id: 1, firstName: 'Christian', lastName: 'Kienle', telNumber: '08236473'},
                                      {  id: 2, firstName: 'Andreas', lastName: 'Haugg', telNumber: '0823652547'},
                                      {  id: 3, firstName: 'Fabian', lastName: 'Winzig', telNumber: '0823245645'},
                                      {  id: 4, firstName: 'Max', lastName: 'Groß', telNumber: '0823245645'},
                                      {  id: 5, firstName: 'Hans', lastName: 'Wurst', telNumber: '02016546566'}
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

}
