import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { MeetingTemplateBase } from '@meetings-nx-microfrontends/shared/meetings-data-layer';

@Component({
  selector: 'mt-meeting-template-card',
  templateUrl: './meeting-template-card.component.html',
  styleUrls: ['./meeting-template-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MeetingTemplateCardComponent {
  @Input() template!: MeetingTemplateBase;
  @Output() scheduleMeeting = new EventEmitter();
}
