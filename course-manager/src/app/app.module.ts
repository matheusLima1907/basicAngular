import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RouterModule } from '@angular/router';
import {HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CourseModule } from './courses/course-module';
import { CoreModule } from './core/core-module';
//por ser modular o angular é mais leve e dinâmico
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    CourseModule,
    RouterModule.forRoot([     
      {
        path: '', redirectTo: 'courses', pathMatch: 'full'
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
