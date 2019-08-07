import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { Ng2PageScrollModule } from 'ng2-page-scroll';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgwWowModule } from 'ngx-wow';

import { NotesComponent } from './notes/notes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CalendarComponent } from './calendar/calendar.component';

import { DemoUtilsModule } from '../demo-utils/module';
import { ProjectsComponent } from './projects/projects.component';
import { BlogComponent } from './blog/blog.component';
import { StockHistoryComponent } from './stock-history/stock-history.component';
import { SchedulesComponent } from './schedules/schedules.component';
import { CodingChallengesComponent } from './coding-challenges/coding-challenges.component';
import { PersonalComponent } from './personal/personal.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

declare var require: any;

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    DashboardComponent,
    NotFoundComponent,
    CalendarComponent,
    ProjectsComponent,
    BlogComponent,
    StockHistoryComponent,
    SchedulesComponent,
    CodingChallengesComponent,
    PersonalComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CommonModule,
    FormsModule,
    NgbModalModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    DemoUtilsModule,
    NgwWowModule,
    Ng2PageScrollModule,
  ],
  exports: [CalendarComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
