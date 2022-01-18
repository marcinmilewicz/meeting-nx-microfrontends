import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { ScheduledMeetingBase } from '@meetings-nx-microfrontends/meeting-scheduled/meeting-scheduled-data-layer';
import { FirestoreDataRepository } from '@meetings-nx-microfrontends/shared-shared-data-layer';

const MEETING_SCHEDULED_COLLECTION: string = 'scheduled';

@Injectable({ providedIn: 'root' })
export class MeetingScheduledRepository extends FirestoreDataRepository<ScheduledMeetingBase> {
  constructor(store: Firestore) {
    super(store, MEETING_SCHEDULED_COLLECTION);
  }
}
