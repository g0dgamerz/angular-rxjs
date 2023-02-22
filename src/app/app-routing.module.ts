import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsyncAwaitComponent } from './async-await/async-await.component';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { IntervalComponent } from './observable/interval/interval.component';
import { ListComponent } from './observable/list/list.component';
import { ObservableComponent } from './observable/observable.component';
import { OfFromComponent } from './observable/of-from/of-from.component';
import { PromiseComponent } from './promise/promise.component';

const routes: Routes = [
  {path: 'async-await',component:AsyncAwaitComponent},
  {path: 'promise',component:PromiseComponent},
  {path: 'observable', component:ObservableComponent, children:[
    {path:'',component: ListComponent},
    {path:'from-event',component:FromEventComponent},
    {path:'interval',component:IntervalComponent},
    {path:'of-from',component:OfFromComponent}
  ]},
  {path: '**', redirectTo:'promise'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
