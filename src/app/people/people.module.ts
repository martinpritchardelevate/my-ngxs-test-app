import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxsModule } from '@ngxs/store';
import { CommonModule } from '@angular/common';
import { PeopleState } from './state/people.state';
import { PeopleComponent} from './people/people.component';
import { PeopleService } from './state/people.service';
import { EntitiesModule } from '../ngrx-entities';

@NgModule({
  declarations: [PeopleComponent],
  imports: [
    CommonModule,
    NgxsModule.forFeature([
      PeopleState
    ]),
    FormsModule,
    EntitiesModule
  ],
  exports: [PeopleComponent],
  entryComponents: [PeopleComponent],
  providers: [
    PeopleService
  ]
})
export class PeopleModule { }
