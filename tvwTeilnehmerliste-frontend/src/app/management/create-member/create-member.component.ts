import { Component, OnInit } from '@angular/core';
import { Trainer } from '../../trainer';
import { Member } from '../../member';
import { Participant } from '../../participant';

import { TvwApiService } from '../../tvw-api.service';

@Component({
  selector: 'app-create-member',
  templateUrl: './create-member.component.html',
  styleUrls: ['./create-member.component.css']
})
export class CreateMemberComponent implements OnInit {
  selectedType;
  newMember: Member;
  readonly TYPE_TRAINER  = 'Trainer';
  readonly TYPE_PARTICIPANT  = 'Teilnehmer';

  constructor(
    private tvwApiService: TvwApiService,
  ) { }

  ngOnInit() {
    this.newMember = new Member();
  }

  private createTrainer(): void {
    this.newMember = this.newMember as Trainer;
    this.tvwApiService.createTrainer(this.newMember);
  }

  private createParticipant(): void {
    this.newMember = this.newMember as Participant;
    this.tvwApiService.createParticipant(this.newMember);
  }

  save(): void {
    if(this.selectedType == null || this.selectedType === ''){
      //TODO: show exception that no type was selected.
      return;
    }
    if(this.selectedType === this.TYPE_TRAINER){
      this.createTrainer();
    }
    if(this.selectedType === this.TYPE_PARTICIPANT){
      this.createParticipant();
    }
    this.tvwApiService.getParticipants();
    this.tvwApiService.getTrainers();
  }



}
