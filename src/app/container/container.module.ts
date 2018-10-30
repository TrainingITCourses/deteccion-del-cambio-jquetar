import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container.component';
import {AppComponent} from '../app.component';
import {HeaderComponent} from '../header/header.component';
import {ListStatesComponent} from './list-states/list-states.component';
import {StateComponent} from './state/state.component';
import {LaunchComponent} from './launch/launch.component';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {StoreModule} from '@ngrx/store';
import {metaReducers, reducers} from '../store';
import {environment} from '../../environments/environment';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {EffectsModule} from '@ngrx/effects';
import {StatusEffects} from '../store/status/status.effects';
import {MissionEffects} from '../store/mission/mission.effects';
import {AgencieEffects} from '../store/agencie/agencie.effects';
import {LaunchEffects} from '../store/launch/launch.effects';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {StateButtonsComponent} from './state/state-buttons/state-buttons.component';
import {StateCounterComponent} from './state/state-counter/state-counter.component';
import {StateLaunchsComponent} from './state/state-launchs/state-launchs.component';
import {LaunchPresenterComponent} from './launch/launch-presenter/launch-presenter.component';

@NgModule({
  declarations: [
    ContainerComponent,
    HeaderComponent,
    ListStatesComponent,
    StateComponent,
    LaunchComponent,
    StateButtonsComponent,
    StateCounterComponent,
    StateLaunchsComponent, LaunchPresenterComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    EffectsModule.forRoot([StatusEffects, MissionEffects, AgencieEffects, LaunchEffects]),
//    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  exports: [ContainerComponent]
})
export class ContainerModule { }
