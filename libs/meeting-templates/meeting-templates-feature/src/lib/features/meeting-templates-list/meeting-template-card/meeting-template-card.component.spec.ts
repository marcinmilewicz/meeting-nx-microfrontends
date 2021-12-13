import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingTemplateCardComponent } from './meeting-template-card.component';

describe('MeetingTemplateCardComponent', () => {
  let component: MeetingTemplateCardComponent;
  let fixture: ComponentFixture<MeetingTemplateCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MeetingTemplateCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingTemplateCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
