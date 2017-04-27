import { Component, OnInit } from '@angular/core';
import { Member } from '../member';

@Component({
  selector: 'app-add-training',
  templateUrl: './add-training.component.html',
  styleUrls: ['./add-training.component.css']
})
export class AddTrainingComponent implements OnInit {
  trainers: Member[] = [
                         { id: 1, firstName: 'Stefan', lastName: 'Böck', telNumber: '01254785565', selected: false},
                         { id: 2, firstName: 'Martin', lastName: 'Bröll', telNumber: '01254785565', selected: false},
                         { id: 3, firstName: 'Tom', lastName: 'Körtge', telNumber: '01254785565', selected: false}
                       ];
  members: Member[] =  [
                         {  id: 1, firstName: 'Christian', lastName: 'Kienle', telNumber: '08236473', selected: false},
                         {  id: 2, firstName: 'Andreas', lastName: 'Haugg', telNumber: '0823652547', selected: false},
                         {  id: 3, firstName: 'Fabian', lastName: 'Winzig', telNumber: '0823245645', selected: false},
                         {  id: 4, firstName: 'Max', lastName: 'Groß', telNumber: '0823245645', selected: false},
                         {  id: 5, firstName: 'Hans', lastName: 'Wurst', telNumber: '02016546566', selected: false}
                       ];
  

  constructor() { }

  ngOnInit() {
  }

  selectMember(member: Member) {
    if (member.selected) {
      member.selected = false;
    }else{
      member.selected = true;
    }
  }

  styleMember(member: Member): string {
    if (member.selected === false) {
      return 'notSelectedBackground';
    } else {
      return 'selectedBackground';
    }
  }

}
