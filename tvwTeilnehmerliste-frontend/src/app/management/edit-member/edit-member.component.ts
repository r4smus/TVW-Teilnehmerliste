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
    // const domainType: Observable<string> = this.route.params.switchMap(p => p.type);
    let memberType = this.route.snapshot.paramMap.get('type');
    let memberId = this.route.snapshot.paramMap.get('id');
    
    // console.log(memberId);

    if(memberType == 'trainer'){
      this.tvwApiService.getTrainerById(memberId)
        .then(trainer => this.trainer = trainer);
      console.log(this.trainer);
    }

    // this.route.params.switchMap((params: Params) =>
    //     this.tvwApiService.getTrainerById(+params['id']))
    //         .subscribe(trainer => this.trainer = trainer);
  }

}
