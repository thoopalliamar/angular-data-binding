import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {SenarioOneModule} from './senario-one/senario-one.module';
import { AppComponent } from './app.component';
import {ComponeoneComponent} from './senario-one/componeone/componeone.component'

@NgModule({
  declarations: [
    AppComponent,
    ComponeoneComponent
  ],
  imports: [
    BrowserModule,
    SenarioOneModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
