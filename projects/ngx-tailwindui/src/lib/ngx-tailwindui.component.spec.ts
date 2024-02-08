import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTailwindUIComponent } from './ngx-tailwindui.component';

describe('NgxTailwindUIComponent', () => {
  let component: NgxTailwindUIComponent;
  let fixture: ComponentFixture<NgxTailwindUIComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgxTailwindUIComponent]
    });
    fixture = TestBed.createComponent(NgxTailwindUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
