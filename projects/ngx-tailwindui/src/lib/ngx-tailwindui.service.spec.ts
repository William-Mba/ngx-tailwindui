import { TestBed } from '@angular/core/testing';

import { NgxTailwindUIService } from './ngx-tailwindui.service';

describe('NgxTailwindUIService', () => {
  let service: NgxTailwindUIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxTailwindUIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
