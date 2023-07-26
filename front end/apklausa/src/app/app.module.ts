import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { KlausimaiService } from './klausimai.service';
import { ChangeBgDirective } from './change-bg.directive';

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
