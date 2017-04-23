import { Component, OnInit } from '@angular/core';
import { Member } from '../member';

@Component({
  selector: 'app-add-training',
  templateUrl: './add-training.component.html',
  styleUrls: ['./add-training.component.css']
})
export class AddTrainingComponent implements OnInit {
  trainers: Member[] = [
                         { id: 1, firstName: 'Stefan', lastName: 'Böck', telNumber: '01254785565'},
                         { id: 2, firstName: 'Martin', lastName: 'Bröll', telNumber: '01254785565'},
                         { id: 3, firstName: 'Tom', lastName: 'Körtge', telNumber: '01254785565'}
                       ];
  members: Member[] =  [
                         {  id: 1, firstName: 'Christian', lastName: 'Kienle', telNumber: '08236473'},
                         {  id: 2, firstName: 'Andreas', lastName: 'Haugg', telNumber: '0823652547'},
                         {  id: 3, firstName: 'Fabian', lastName: 'Winzig', telNumber: '0823245645'},
                         {  id: 4, firstName: 'Max', lastName: 'Groß', telNumber: '0823245645'},
                         {  id: 5, firstName: 'Hans', lastName: 'Wurst', telNumber: '02016546566'}
                       ];

  constructor() { }

  ngOnInit() {
  }

}
