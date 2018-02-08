import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TvwApiService } from '../../tvw-api.service';
import { Trainer } from '../../trainer';
import { Participant } from '../../participant';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.component.html',
  styleUrls: ['./edit-member.component.css']
})
export class EditMemberComponent implements OnInit {

  trainer: Trainer;
  participant: Participant;

  constructor(
    private route: ActivatedRoute,
    private tvwApiService: TvwApiService,
  ) { }

  ngOnInit() {
    // this.route.params.switchMap((params: Params) =>
    //     this.tvwApiService.getHero(+params['id']))
    //         .subscribe(trainer => this.trainer = trainer);
  }

}
