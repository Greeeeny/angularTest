import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { oneComponent } from './one';
import { TwoComponent } from './two.component';

@NgModule({
  declarations: [//声明
    AppComponent,
    oneComponent,
    TwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]//start component: AppComponent
})
export class AppModule { }
