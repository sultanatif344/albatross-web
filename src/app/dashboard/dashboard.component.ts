import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { MatDialogModule, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LessonsdetailsComponent } from '../components/lessonsdetails/lessonsdetails.component';
// import { LessonsdetailsComponent } from '../components/lessonsdetails/lessonsdetails.component';
// import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  public lessonsList:Array<Object>;
  // events
  // public chartClicked(e:any):void {
  //   console.log(e);
  // }

  // public chartHovered(e:any):void {
  //   console.log(e);
  // }
  // public hexToRGB(hex, alpha) {
  //   var r = parseInt(hex.slice(1, 3), 16),
  //     g = parseInt(hex.slice(3, 5), 16),
  //     b = parseInt(hex.slice(5, 7), 16);

  //   if (alpha) {
  //     return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
  //   } else {
  //     return "rgb(" + r + ", " + g + ", " + b + ")";
  //   }
  // }
  
  constructor(public dialog: MatDialog) { }
  
  ngOnInit() {

    this.lessonsList = [
      {
        lessonTaker: 'Person1',
        lessonDate: '24-6-2020',
        lessonName: 'First Lesson',
        lessonStartTime: '1:30PM',
        lessonEndTime: '2:00PM',
        lessonDuration: 30,
        Instructor: 'Instructor1',
        completed: false
      },
      {
        lessonTaker: 'Person2',
        lessonDate: '24-6-2020',
        lessonName: 'Design Psychology',
        lessonStartTime: '10:30AM',
        lessonEndTime: '2:00PM',
        lessonDuration: 2.5,
        Instructor: 'Instructor1',
        completed: false
      },
      {
        lessonTaker: 'Person3',
        lessonDate: '24-6-2020',
        lessonName: 'Third Lesson',
        lessonStartTime: '11:00AM',
        lessonEndTime: '2:00PM',
        lessonDuration: 2.5,
        Instructor: 'Instructor1',
        completed: false
      }
    ]

    

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(LessonsdetailsComponent, {
      width: '300px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }


  
  }
