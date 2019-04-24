import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DecisionFlowComponent } from './decision-flow/decision-flow.component';
import { DecisionViewComponent } from './decision-view/decision-view.component';


@NgModule({
  declarations: [
    DecisionFlowComponent,
    DecisionViewComponent
  ],
  exports: [
    DecisionFlowComponent,
    DecisionViewComponent
  ],
  imports: [
    RouterModule,
  ],
  providers: [],
})
export class SharedModule { }
