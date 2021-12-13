import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduledMeetingCardComponent } from './scheduled-meeting-card.component';

describe('MeetingTemplateCardComponent', () => {
  let component: ScheduledMeetingCardComponent;
  let fixture: ComponentFixture<ScheduledMeetingCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScheduledMeetingCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduledMeetingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
