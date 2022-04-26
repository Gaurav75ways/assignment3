import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(private router: Router, private mainService: MainService) {
    
  }

  ngOnInit(): void {
  }
  
  // getDashData(){
  //   console.log(this.mainService.dashData());
  // }

  // loggedin() {
  //   return localStorage.getItem('token');
  // }

  // logoutUser(){
  //   this.mainService.onLogout()
  // }
}
