import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { FirestoreDataRepository } from '@meetings-nx-microfrontends/shared/shared-data-layer';
import { MeetingTemplateBase } from './state/meeting-templates.models';

const MEETING_TEMPLATES_COLLECTION = 'templates';

@Injectable({ providedIn: 'root' })
export class MeetingTemplatesRepository extends FirestoreDataRepository<MeetingTemplateBase> {
  constructor(store: Firestore) {
    super(store, MEETING_TEMPLATES_COLLECTION);
  }
}
