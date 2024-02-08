import { TestBed } from '@angular/core/testing';

import { NgxTailwinduiService } from './ngx-tailwindui.service';

describe('NgxTailwinduiService', () => {
  let service: NgxTailwinduiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxTailwinduiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
