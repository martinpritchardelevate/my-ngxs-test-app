import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { PeopleState } from '../people.state';
import { Person } from '../people.model';
import * as peopleActions from '../people.actions';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PeopleComponent implements OnInit {

  @Select(PeopleState.list)
  people$: Observable<Array<Person>>;

  @Select(PeopleState.hasMore)
  hasMore$: Observable<Array<boolean>>;

  selectedPerson: Person;

  constructor() { }

  ngOnInit() {
    this.createEmptyPerson();
    this.peopleRead();
  }

  // CRUD (Create, Read, Update, Delete) NGXS methods...
  @Dispatch() personCreate = (person: Person) => new peopleActions.Create(person);
  @Dispatch() peopleRead = () => new peopleActions.Read();
  @Dispatch() peopleReadMore = () => new peopleActions.ReadMore();
  @Dispatch() peopleRefresh = () => new peopleActions.Refresh();
  @Dispatch() personUpdate = (person: Person) => new peopleActions.Update(person);
  @Dispatch() personDelete = (person: Person) => new peopleActions.Delete(person);

  createEmptyPerson = () => this.selectedPerson = new Person('', '', '', 0);

  onPersonClicked(person) {
    this.selectedPerson = person;
  }

  onCreateClicked($event) {
    this.createEmptyPerson();
  }

  async onUpdate($event) {
    await this.personUpdate(this.selectedPerson);
  }

  async onCreate($event) {
    await this.personCreate(this.selectedPerson);
  }

  async onDelete(person: Person) {
    await this.personDelete(person);
  }

  async onRefreshClicked(person: Person) {
    await this.peopleRefresh();
  }

  async onLoadMoreClicked($event) {
     this.peopleReadMore();
  }

}
