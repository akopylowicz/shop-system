import { AppRoutingModule } from './app/app.routes';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
 
bootstrapApplication(AppComponent, {
  providers: [
      importProvidersFrom(AppRoutingModule, BrowserModule),
      provideHttpClient(withInterceptorsFromDi())
  ]
}).catch(err => console.error(err));
 