import { TestBed, inject } from '@angular/core/testing';

import { ComponentEventsService } from './component-events.service';

describe('ComponentEventsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComponentEventsService]
    });
  });

  it('should be created', inject([ComponentEventsService], (service: ComponentEventsService) => {
    expect(service).toBeTruthy();
  }));
});
