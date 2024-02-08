import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTailwinduiComponent } from './ngx-tailwindui.component';

describe('NgxTailwinduiComponent', () => {
  let component: NgxTailwinduiComponent;
  let fixture: ComponentFixture<NgxTailwinduiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgxTailwinduiComponent]
    });
    fixture = TestBed.createComponent(NgxTailwinduiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
