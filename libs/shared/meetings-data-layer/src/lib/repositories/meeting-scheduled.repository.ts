import { Inject, Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ScheduledMeetingBase } from '@meetings-nx-microfrontends/meeting-scheduled/meeting-scheduled-data-layer';
import { FirestoreDataRepository } from '@meetings-nx-microfrontends/shared/core';
import { MEETING_SCHEDULED_COLLECTION } from '../meetings-data-layer.module';

@Injectable({ providedIn: 'root' })
export class MeetingScheduledRepository extends FirestoreDataRepository<ScheduledMeetingBase> {
  constructor(@Inject(MEETING_SCHEDULED_COLLECTION) scheduledCollection: string, store: AngularFirestore) {
    super(store, scheduledCollection);
  }
}
