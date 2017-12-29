import { Injectable } from '@angular/core';
import { Training } from './training';
import { Trainer } from './trainer';
import { Participant } from 'app/participant';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class TvwApiService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: Http) { }

  getTrainings(): Promise<Training[]> {
    return this.http.get(this.baseUrl + '/tvw-api/trainings')
      .toPromise()
      .then(response => response.json() as Training[])
      .catch(this.handleError);
  }

  getTrainers(): Promise<Trainer[]> {
    return this.http.get(this.baseUrl + '/tvw-api/trainers')
      .toPromise()
      .then(response => response.json() as Trainer[])
      .catch(this.handleError);
  }

  getParticipants(): Promise<Participant[]> {
    return this.http.get(this.baseUrl + '/tvw-api/participants')
      .toPromise()
      .then(response => response.json() as Participant[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Some error occured', error);
    return Promise.reject(error.message || error);
  }

}
