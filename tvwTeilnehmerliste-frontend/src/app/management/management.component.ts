import { Component, OnInit } from '@angular/core';
import { Trainer } from '../trainer';
import { TEMPLATE_DRIVEN_DIRECTIVES } from '@angular/forms/src/directives';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent implements OnInit {

  trainer: Trainer;
  public saveUsername:boolean;

  constructor() { }

  ngOnInit() {
    this.trainer = new Trainer(1,'Hans', 'Wurst','0165456565465');
  }

  public onSaveUsernameChanged(value:boolean){
    this.saveUsername = value;
  }

  public onSaveTrainerChanged(value:boolean){
    this.trainer.selected = value;
  }

  

}
