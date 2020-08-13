import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-lessonsdetails',
  templateUrl: './lessonsdetails.component.html',
  styleUrls: ['./lessonsdetails.component.css']
})
export class LessonsdetailsComponent implements OnInit {

  constructor(private dialog : MatDialogRef<LessonsdetailsComponent>) { }

  ngOnInit(): void {
  }

}
