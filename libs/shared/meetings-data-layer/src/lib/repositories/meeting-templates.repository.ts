import { Inject, Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FirestoreDataRepository } from '@meetings-nx-microfrontends/shared/core';
import { MEETING_TEMPLATES_COLLECTION } from '../meetings-data-layer.module';
import { MeetingTemplateBase } from '../models/meeting-templates';

@Injectable({ providedIn: 'root' })
export class MeetingTemplatesRepository extends FirestoreDataRepository<MeetingTemplateBase> {
  constructor(@Inject(MEETING_TEMPLATES_COLLECTION) templatesCollection: string, store: AngularFirestore) {
    super(store, templatesCollection);
  }
}
