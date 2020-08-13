import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LessonitemComponent } from './lessonitem/lessonitem.component';
import { LoginsignupComponent } from './loginsignup/loginsignup.component';
import { LessonsdetailsComponent } from './lessonsdetails/lessonsdetails.component';
import { CalendarComponent } from './calendar/calendar.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    LessonitemComponent,
    LoginsignupComponent,
    LessonsdetailsComponent,
    CalendarComponent,

  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent
  ]
})
export class ComponentsModule { }
