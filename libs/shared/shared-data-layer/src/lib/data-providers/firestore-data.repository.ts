import { Directive } from '@angular/core';
import { addDoc, collection, collectionData, doc, docData, Firestore } from '@angular/fire/firestore';
import { DocumentData } from 'rxfire/firestore/interfaces';

import { from, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { WithId } from './data.model';
import { ReactiveDataRepository } from './reactive-data.repository';

@Directive()
export abstract class FirestoreDataRepository<Type> implements ReactiveDataRepository<Type, string> {
  protected collection = collection(this.firestore, this.collectionName);

  protected constructor(private firestore: Firestore, private collectionName: string, private idField: string = 'id') {}

  getAll(): Observable<WithId<Type, string>[]> {
    return collectionData<any>(this.collection, { idField: this.idField });
  }

  getById(id: string): Observable<WithId<Type, string> | undefined> {
    const docd = doc(this.firestore, 'foo/bar');

    //todo fix any
    return docData<any>(docd);
  }

  create(item: Type): Observable<string> {
    return from(addDoc(this.collection, item)).pipe(map((item: DocumentData) => item.id));
  }

  delete(id: string): Observable<void> {
    //TODO toimplement
    return of();
  }
}
