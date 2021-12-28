import { Inject, Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MeetingTemplateBase } from '@meetings-nx-microfrontends/meeting-templates/meeting-templates-data-layer';
import { FirestoreDataRepository } from '@meetings-nx-microfrontends/shared/core';
import { MEETING_TEMPLATES_COLLECTION } from '../meetings-data-layer.module';

@Injectable({ providedIn: 'root' })
export class MeetingTemplatesRepository extends FirestoreDataRepository<MeetingTemplateBase> {
  constructor(@Inject(MEETING_TEMPLATES_COLLECTION) templatesCollection: string, store: AngularFirestore) {
    super(store, templatesCollection);
  }
}
