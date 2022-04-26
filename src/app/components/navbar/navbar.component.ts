import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private mainService:MainService) { }

  ngOnInit(): void {
  }

  loggedin() {
    return localStorage.getItem('token');
  }

  logoutUser(){
    this.mainService.onLogout();
  }

}
