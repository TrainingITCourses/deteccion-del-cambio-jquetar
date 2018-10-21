import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { LaunchesListComponent } from './container/launches-list/launches-list.component';
import { SearchComponent } from './container/search/search.component';
import { CounterComponent } from './container/counter/counter.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store/index';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import {EffectsModule} from '@ngrx/effects';
import { StatusEffects } from './store/status/status.effects';
import { MissionEffects } from './store/mission/mission.effects';
import { AgencieEffects } from './store/agencie/agencie.effects';
import { LaunchEffects } from './store/launch/launch.effects';
import { ServiceWorkerModule } from '@angular/service-worker';
@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    LaunchesListComponent,
    SearchComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([StatusEffects, MissionEffects, AgencieEffects, LaunchEffects]),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
