import { Observable } from 'rxjs';
import { WithId } from './data.model';

export interface ReactiveDataRepository<Type, IDKey extends string, IDType> {
  getAll(): Observable<WithId<Type, IDKey>[]>;
  getById(id: IDType): Observable<WithId<Type, IDKey, IDType> | undefined>;
  create(item: Type): Observable<IDType>;
  delete(id: IDType): Observable<void>;
}
