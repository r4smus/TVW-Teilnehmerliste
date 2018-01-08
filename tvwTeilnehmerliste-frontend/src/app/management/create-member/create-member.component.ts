import { Component, OnInit } from '@angular/core';
import { Trainer } from '../../trainer';
import { Participant } from '../../participant';

import { TvwApiService } from '../../tvw-api.service'

@Component({
  selector: 'app-create-member',
  templateUrl: './create-member.component.html',
  styleUrls: ['./create-member.component.css']
})
export class CreateMemberComponent implements OnInit {
  firstName: string;
  lastName: string;
  selectedType: string;
  newTrainer: Trainer;


  constructor(
    private tvwApiService: TvwApiService,
  ) { }

  ngOnInit() {
    this.firstName = '';
    this.lastName = '';
    this.newTrainer = new Trainer();
  }

  createTrainer(): void {
    debugger;
    this.newTrainer.firstName = this.firstName;
    this.newTrainer.lastName = this.lastName;
    this.tvwApiService.createTrainer(this.newTrainer);
  }

  save(): void {
    if(this.selectedType == null || this.selectedType == ''){
      return;
    }
    if(this.selectedType == 'Trainer'){
      this.createTrainer();
    }
    if(this.selectedType == 'Teilnehmer'){
      //TODO: move option values as a string array into this class and refernce them here
    }
  }



}
