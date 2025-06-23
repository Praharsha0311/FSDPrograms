import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCssComponent } from './event-css.component';

describe('EventCssComponent', () => {
  let component: EventCssComponent;
  let fixture: ComponentFixture<EventCssComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventCssComponent]
    });
    fixture = TestBed.createComponent(EventCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
