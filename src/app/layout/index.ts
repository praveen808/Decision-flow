import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';

import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    RouterModule,
  ],
  providers: [],
})
export class LayoutModule { }
