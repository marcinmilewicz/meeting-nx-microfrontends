import { Directive } from '@angular/core';
import {
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
  docData,
  DocumentReference,
  Firestore,
} from '@angular/fire/firestore';
import { QueryDocumentSnapshot } from '@firebase/firestore';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { WithId } from './data.model';
import { ReactiveDataRepository } from './reactive-data.repository';

const collectionConverter = <Type>() => ({
  toFirestore: (model: Type) => ({ ...model }),
  fromFirestore: (snapshot: QueryDocumentSnapshot<Type>) => ({ ...snapshot.data(), id: snapshot.id }),
});

@Directive()
export abstract class FirestoreDataRepository<Type> implements ReactiveDataRepository<Type, 'id', string> {
  protected collection = collection(this.firestore, this.collectionName).withConverter<Type>(
    collectionConverter<Type>()
  );

  protected constructor(private firestore: Firestore, private collectionName: string, private idField: string = 'id') {}

  getAll(): Observable<WithId<Type, 'id'>[]> {
    return collectionData<any>(this.collection, { idField: this.idField });
  }

  getById(id: string): Observable<WithId<Type, 'id'>> {
    return docData(doc(this.collection, id)).pipe(map((data: Type) => ({ ...data, id })));
  }

  create(item: Type): Observable<string> {
    return from(addDoc<Type>(this.collection, item)).pipe(map((item: DocumentReference<Type>) => item.id));
  }

  delete(id: string): Observable<void> {
    return from(deleteDoc(doc(this.collection, id)));
  }
}
