import { TestBed, inject } from '@angular/core/testing';

import { TvwApiService } from './tvw-api.service';

describe('TvwApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TvwApiService]
    });
  });

  it('should ...', inject([TvwApiService], (service: TvwApiService) => {
    expect(service).toBeTruthy();
  }));
});
