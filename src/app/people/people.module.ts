import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxsModule } from '@ngxs/store';
import { CommonModule } from '@angular/common';
import { PeopleState } from './people.state';
import { PeopleComponent} from './people/people.component';

@NgModule({
  declarations: [PeopleComponent],
  imports: [
    CommonModule,
    NgxsModule.forFeature([
      PeopleState
    ]),
    FormsModule
  ],
  exports: [PeopleComponent],
  entryComponents: [PeopleComponent]
})
export class PeopleModule { }
