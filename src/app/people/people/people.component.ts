import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { PeopleState } from '../state/people.state';
import { Person } from '../state/people.model';
import * as peopleActions from '../state/people.actions';

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
    this.peopleList();
  }

  // CRUD (Create, Read, Update, Delete) NGXS methods...
  @Dispatch() personCreate = (person: Person) => new peopleActions.Create(person);
  @Dispatch() peopleList = () => new peopleActions.List(null);
  @Dispatch() peopleListMore = () => new peopleActions.ListMore(null);
  @Dispatch() personUpdate = (person: Person) => new peopleActions.Update(person);
  @Dispatch() personDelete = (person: Person) => new peopleActions.Delete(person);

  createEmptyPerson = () => this.selectedPerson = new Person('', '', '', 0);

  onPersonClicked(person) {
    this.selectedPerson = { ...person };
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

  }

  async onLoadMoreClicked($event) {
     this.peopleListMore();
  }

}
