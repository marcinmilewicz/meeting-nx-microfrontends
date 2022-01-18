import { Observable } from 'rxjs';
import { WithId } from './data.model';

export interface ReactiveDataRepository<Type, ID extends string | number> {
  getAll(): Observable<WithId<Type, ID>[]>;
  getById(id: ID): Observable<WithId<Type, ID> | undefined>;
  create(item: Type): Observable<ID>;
  delete(id: ID): Observable<void>;
}
