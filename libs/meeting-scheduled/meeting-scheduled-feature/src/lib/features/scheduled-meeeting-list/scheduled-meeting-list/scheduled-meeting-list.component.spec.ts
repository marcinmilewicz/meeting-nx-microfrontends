import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduledMeetingListComponent } from './scheduled-meeting-list.component';

describe('MeetingTemplatesListComponent', () => {
  let component: ScheduledMeetingListComponent;
  let fixture: ComponentFixture<ScheduledMeetingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScheduledMeetingListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduledMeetingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
