import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';
import { AppRoutingModule } from '../app.routes';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AppRoutingModule
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    AppRoutingModule
  ]
})
export class SharedModule { }
