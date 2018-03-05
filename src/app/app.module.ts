import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TestComponent } from './comps/test/test.component';
import { TestSetComponent } from './comps/test-set/test-set.component';

import { TestService } from './svcs/test.service';
import { TestSetService } from './svcs/test-set.service';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TestSetComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFontAwesomeModule
  ],
  providers: [
    TestSetService,
  	TestService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
