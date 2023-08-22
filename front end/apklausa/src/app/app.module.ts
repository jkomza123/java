import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { ChangeBgDirective } from './change-bg.directive';
import { KlausimaiService } from './klausimai.service';

@NgModule({
  declarations: [
    AppComponent,
    ChangeBgDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule 
  ],
  providers: [KlausimaiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
