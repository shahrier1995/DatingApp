import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpClient
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AccountService } from '../_services/account.service';
import { User } from '../_models/user';
import { take } from 'rxjs/operators';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private accountService:AccountService,private http:HttpClient) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let currentUser :User|undefined ;
    currentUser=JSON.parse(localStorage.getItem('user')!);
    
    this.accountService.currentUser$.pipe(take(1)).subscribe(user => currentUser=user);
    //console.log(currentUser);
    if(currentUser){
      request=request.clone({
        setHeaders:{
          Authorization: 'Bearer '+ currentUser.token,
        }
      });
    }
    return next.handle(request);
  }
}
