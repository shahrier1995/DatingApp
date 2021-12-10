import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './_models/user';
import { AccountService } from './_services/account.service';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 
  title = 'client';
  users:any;
  constructor(private accountService : AccountService,private http : HttpClient){}
  ngOnInit() {
    this.setCurrentUser();
  }
  
  setCurrentUser(){
    const user: User = JSON.parse(localStorage.getItem("user")!);
    this.accountService.setCurrentUser(user);
  }

 
}
