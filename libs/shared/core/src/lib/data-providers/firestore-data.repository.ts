import { Directive } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/compat/firestore';
import { from, map, Observable } from 'rxjs';
import { WithId } from './data.model';
import { ReactiveDataRepository } from './reactive-data.repository';

@Directive()
export abstract class FirestoreDataRepository<Type> implements ReactiveDataRepository<Type, string> {
  protected constructor(
    private store: AngularFirestore,
    private collectionName: string,
    private idField: string = 'id'
  ) {}

  getAll(): Observable<WithId<Type, string>[]> {
    return this.store.collection<WithId<Type, string>>(this.collectionName).valueChanges({ idField: this.idField });
  }

  getById(id: string): Observable<WithId<Type, string> | undefined> {
    return this.store
      .collection<WithId<Type, string>>(this.collectionName)
      .doc<WithId<Type, string>>(id)
      .valueChanges();
  }

  create(item: Type): Observable<string> {
    return from(this.store.collection<Type>(this.collectionName).add(item)).pipe(
      map(({ id }: DocumentReference<Type>) => id)
    );
  }

  delete(id: string): Observable<void> {
    return from(this.store.collection<Type>(this.collectionName).doc(id).delete());
  }
}
