import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container.component';
import { LaunchesListComponent } from './launches-list/launches-list.component';
import { SearchComponent } from './search/search.component';
import { CounterComponent } from './counter/counter.component';
import { ContainerRoutingModule } from './container-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ContainerRoutingModule
  ],
  declarations: [
    ContainerComponent,
    LaunchesListComponent,
    SearchComponent,
    CounterComponent,
  ]
})
export class ContainerModule { }
