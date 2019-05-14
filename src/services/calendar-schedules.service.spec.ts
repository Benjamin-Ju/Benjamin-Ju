import { TestBed } from '@angular/core/testing';

import { CalendarSchedulesService } from './calendar-schedules.service';

describe('CalendarSchedulesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CalendarSchedulesService = TestBed.get(CalendarSchedulesService);
    expect(service).toBeTruthy();
  });
});
