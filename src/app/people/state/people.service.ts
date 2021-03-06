import { Injectable, Inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiCollection, ApiCollectionPagingInfo } from '../../ngrx-entities';
import { Person } from './people.model';

@Injectable()
export class PeopleService {

    list(pageNo: number = 1): Observable<ApiCollection<Person>> {
      const collection = new ApiCollection<Person>();
      debugger;

      if (pageNo === 1) {
        collection.items.push(new Person('1', 'Elliott', 'Pritchard', 10));
        collection.items.push(new Person('2', 'Audrey', 'Pritchard', 10));
        collection.items.push(new Person('3', 'Lucy', 'Pritchard', 10));
        collection.items.push(new Person('4', 'Martin', 'Pritchard', 10));
        collection.paging = new ApiCollectionPagingInfo(10, 3, 1);
      } else if (pageNo === 2) {
        collection.items.push(new Person('5', 'Gareth', 'Pritchard', 10));
        collection.items.push(new Person('6', 'Sally', 'Pritchard', 10));
        collection.items.push(new Person('7', 'James', 'Pritchard', 10));
        collection.items.push(new Person('8', 'Ben', 'Pritchard', 10));
        collection.paging = new ApiCollectionPagingInfo(10, 3, 2);
      } else if (pageNo === 3) {
        collection.items.push(new Person('9', 'Dave', 'Pritchard', 10));
        collection.items.push(new Person('10', 'Kathryn', 'Pritchard', 10));
        collection.paging = new ApiCollectionPagingInfo(10, 3, 3);
      }
      return of(collection);
    }

    create(person: Person): Observable<Person> {
      return of(person);
    }

    read(person: Person): Observable<Person> {
      return of(person);
    }

    update(person: Person): Observable<Person> {
      return of(person);
    }

    delete(person: Person): Observable<Person> {
      return of(person);
    }

}
