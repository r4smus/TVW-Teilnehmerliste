import { Injectable } from '@angular/core';
import { Training } from './training';
import { Trainer } from './trainer';
import { Participant } from 'app/participant';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class TvwApiService {
  private baseUrl = 'http://localhost:8080/tvw-api';

  constructor(private http: Http) { }

  getTrainings(): Promise<Training[]> {
    return this.http.get(this.baseUrl + '/trainings')
      .toPromise()
      .then(response => response.json() as Training[])
      .catch(this.handleError);
  }

  getTrainers(): Promise<Trainer[]> {
    return this.http.get(this.baseUrl + '/trainers')
      .toPromise()
      .then(response => response.json() as Trainer[])
      .catch(this.handleError);
  }

  getParticipants(): Promise<Participant[]> {
    return this.http.get(this.baseUrl + '/participants')
      .toPromise()
      .then(response => response.json() as Participant[])
      .catch(this.handleError);
  }

  createTrainer(trainerData: Trainer): Promise<Trainer> {
    return this.http.post(this.baseUrl + '/createTrainer', trainerData)
      .toPromise().then(response => response.json() as Trainer)
      .catch(this.handleError);
  }

  createParticipant(participantData: Participant): Promise<Participant> {
    return this.http.post(this.baseUrl + '/createParticipant', participantData)
      .toPromise().then(response => response.json() as Participant)
      .catch(this.handleError);
  }

  createTraining(trainingData: Training): void {
    this.http.post(this.baseUrl + '/trainings', trainingData);
  }

  private handleError(error: any): Promise<any> {
    console.error('Some error occured', error);
    return Promise.reject(error.message || error);
  }

}
