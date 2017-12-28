import { Injectable } from '@angular/core';
import { Training } from './training';
import { Member } from './member';
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

  private handleError(error: any): Promise<any> {
    console.error('Some error occured', error);
    return Promise.reject(error.message || error);
  }

}
