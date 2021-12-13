import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingTemplateListComponent } from './meeting-template-list.component';

describe('MeetingTemplatesListComponent', () => {
  let component: MeetingTemplateListComponent;
  let fixture: ComponentFixture<MeetingTemplateListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MeetingTemplateListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingTemplateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
