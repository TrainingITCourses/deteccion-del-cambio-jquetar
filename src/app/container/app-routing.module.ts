import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListStatesComponent} from './list-states/list-states.component';
import {StateComponent} from './state/state.component';
import {LaunchComponent} from './launch/launch.component';

const routes: Routes = [
  {
    path: 'states',
    component: ListStatesComponent,
    data: { title: 'Número de lanzamientos' }
  }, {
    path: 'states/:id',
    component: StateComponent,
    data: { title: 'Nombre del estado' }
  }, {
    path: 'launchs/:id',
    component: LaunchComponent,
    data: { title: 'Nombre del lanzamiento' }
  }, {
    path: '',
    redirectTo: '/states', pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
