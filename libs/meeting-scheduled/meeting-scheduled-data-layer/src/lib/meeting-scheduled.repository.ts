import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { FirestoreDataRepository } from '@meetings-nx-microfrontends/shared-shared-data-layer';
import { ScheduledMeetingBase } from './state/meeting-scheduled.models';

const MEETING_SCHEDULED_COLLECTION = 'scheduled';

@Injectable({ providedIn: 'root' })
export class MeetingScheduledRepository extends FirestoreDataRepository<ScheduledMeetingBase> {
  constructor(store: Firestore) {
    super(store, MEETING_SCHEDULED_COLLECTION);
  }
}
