import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

// services
import { ApiService } from './services/api.service';
import { HighlightPipe } from './pipes/highlight.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HighlightPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
