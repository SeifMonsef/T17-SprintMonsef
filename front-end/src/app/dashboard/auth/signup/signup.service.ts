//import { Injector } from '@angular/core';
import { Injectable } from '@angular/core';
//import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Http, Headers } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { catchError } from 'rxjs/operators';


@Injectable()
export class SignupService{
    constructor(private http:Http){
        console.log('yalaa');
    }
   public addReg(UserOb){
        var headers=new Headers();
        headers.append('content-type','application/json');
        return this.http.post('http://localhost:3000/authe/register',JSON.stringify(UserOb),{headers:headers}).map(res=>
    res.json());
    }
}
