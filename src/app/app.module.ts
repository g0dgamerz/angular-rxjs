import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PromiseComponent } from './promise/promise.component';
import { HeaderComponent } from './includes/header/header.component';

import {AccordionModule} from 'primeng/accordion';     
import {MenuItem} from 'primeng/api';
import {ButtonModule} from 'primeng/button';
import { ObservableComponent } from './observable/observable.component';
import { ListComponent } from './observable/list/list.component';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { CardModule } from 'primeng/card';
import { IntervalComponent } from './observable/interval/interval.component';



@NgModule({
  declarations: [
    AppComponent,
    PromiseComponent,
    HeaderComponent,
    ObservableComponent,
    ListComponent,
    FromEventComponent,
    IntervalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    CardModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
