import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lessonitem',
  templateUrl: './lessonitem.component.html',
  styleUrls: ['./lessonitem.component.css']
})
export class LessonitemComponent implements OnInit {

  constructor() { }


  public lessonsList: Array<Object>;
  lessons: Object;
  ngOnInit(): void {
    this.lessonsList = [
      this.lessons={
        lessonName:"First Lesson",
        lessonTaker:"Lesson One",
        lessonsStartTime:"10:50AM"
      }
    ]
  }



}
