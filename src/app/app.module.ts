import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { counterReducer } from './reducers/counter-reducers';
import { CounterEffects } from './effects/counter.effects';



@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ numbers: counterReducer }),
    EffectsModule.forRoot([CounterEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
