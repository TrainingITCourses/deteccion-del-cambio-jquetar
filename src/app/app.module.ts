import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {ContainerModule} from './container/container.module';
import {StoreModule} from '@ngrx/store';
import {metaReducers, reducers} from './store';
import {environment} from '../environments/environment';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {EffectsModule} from '@ngrx/effects';
import {StatusEffects} from './store/status/status.effects';
import {MissionEffects} from './store/mission/mission.effects';
import {AgencieEffects} from './store/agencie/agencie.effects';
import {LaunchEffects} from './store/launch/launch.effects';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ContainerModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    EffectsModule.forRoot([StatusEffects, MissionEffects, AgencieEffects, LaunchEffects]),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
