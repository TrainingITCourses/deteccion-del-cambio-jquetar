import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { LaunchesListComponent } from './container/launches-list/launches-list.component';
import { SearchComponent } from './container/search/search.component';
import { CounterComponent } from './container/counter/counter.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    LaunchesListComponent,
    SearchComponent,
    CounterComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }), HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
