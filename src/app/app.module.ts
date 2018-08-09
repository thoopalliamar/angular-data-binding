import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {SenarioOneModule} from './senario-one/senario-one.module';
import { AppComponent } from './app.component';
import { SenarioTwoModule } from './senario-two/senario-two.module';
import { SenarioThreeModule } from './senario-three/senario-three.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SenarioOneModule,
    SenarioTwoModule,
    SenarioThreeModule,
    FormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
