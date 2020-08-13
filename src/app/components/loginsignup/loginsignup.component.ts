import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-loginsignup',
  templateUrl: './loginsignup.component.html',
  styleUrls: ['./loginsignup.component.css']
})
export class LoginsignupComponent implements OnInit {

  constructor(private router:Router) { }


  public flag:boolean;
  ngOnInit(): void {
    this.flag = true;

    // this.router.navigateByUrl("/dashboard");

  }
  
  switchViewToLogin(){
    this.flag = true; 
  }

  switchViewToRegister(){
    this.flag = false;
  }

}
