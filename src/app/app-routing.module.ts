import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotesComponent } from './notes/notes.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ProjectsComponent } from './projects/projects.component';
import { BlogComponent } from './blog/blog.component';
import { StockHistoryComponent } from './stock-history/stock-history.component';
import { SchedulesComponent } from './schedules/schedules.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { LeetcodeComponent } from './leetcode/leetcode.component';

const routes: Routes = [
  { path: '', component: PortfolioComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'personal', component: DashboardComponent },
  { path: 'personal/calendar', component: CalendarComponent },
  { path: 'personal/notes', component: NotesComponent },
  { path: 'personal/projects', component: ProjectsComponent },
  { path: 'personal/blog', component: BlogComponent },
  { path: 'personal/stockhistory', component: StockHistoryComponent },
  { path: 'personal/schedules', component: SchedulesComponent },
  { path: 'personal/leetcode', component: LeetcodeComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
