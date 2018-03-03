import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TestLibraryComponent } from './test-library/test-library.component';
import { TestPackageComponent } from './test-package/test-package.component';
import { TestModuleComponent } from './test-module/test-module.component';
import { TestSetComponent } from './test-set/test-set.component';
import { TestComponent } from './test/test.component';
import { TestCaseComponent } from './test-case/test-case.component';


@NgModule({
  declarations: [
    AppComponent,
    TestLibraryComponent,
    TestPackageComponent,
    TestModuleComponent,
    TestSetComponent,
    TestComponent,
    TestCaseComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
