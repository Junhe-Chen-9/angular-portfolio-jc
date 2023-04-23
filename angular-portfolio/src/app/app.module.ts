import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicinfoComponent } from './component/basicinfo/basicinfo.component';
import { EducationComponent } from './component/education/education.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicinfoComponent,
    EducationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
