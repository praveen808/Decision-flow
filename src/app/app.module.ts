import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout';
import { HomeComponent } from './home/home.component';
import { DecisionFlowComponent } from './shared/decision-flow/decision-flow.component';
import { DecisionViewComponent } from './shared/decision-view/decision-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DecisionFlowComponent,
    DecisionViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
