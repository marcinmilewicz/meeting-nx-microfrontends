import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { MeetingTemplateBase } from '@meetings-nx-microfrontends/meeting-templates/meeting-templates-data-layer';
import { FirestoreDataRepository } from '@meetings-nx-microfrontends/shared-shared-data-layer';

const MEETING_TEMPLATES_COLLECTION: string = 'templates';

@Injectable({ providedIn: 'root' })
export class MeetingTemplatesRepository extends FirestoreDataRepository<MeetingTemplateBase> {
  constructor(store: Firestore) {
    super(store, MEETING_TEMPLATES_COLLECTION);
  }
}
