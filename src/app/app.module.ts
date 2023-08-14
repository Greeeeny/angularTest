import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { oneComponent } from './one';
import { TwoComponent } from './two.component';
import { ThreeComponent } from './Three/three.component';
import { FourComponent } from './four/four.component';
import { FiveComponent } from './five/five.component';

@NgModule({
  declarations: [//声明
    AppComponent,
    oneComponent,
    TwoComponent,
    ThreeComponent,
    FourComponent,
    FiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]//start component: AppComponent
})
export class AppModule { }
