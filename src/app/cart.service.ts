import { Injectable } from '@angular/core';
import {  Shopping } from './model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { addcart,LoginData, TokenData } from './model';
//import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  

  constructor(private http: HttpClient) { }
  Shopping(): Observable<Array<Shopping>> {
    return this.http.get<Array<Shopping>>(
      'https://620f9959ec8b2ee28345f7c0.mockapi.io/shopping',
    );
}
/* addcart(id:String,userData: addcart): Observable<addcart> {
  return this.http.post<addcart>(
    `https://620f9959ec8b2ee28345f7c0.mockapi.io/form/${id}`,
    userData
  )} */
  addcart(userData: addcart):Observable<addcart>{
    return this.http.post<addcart>("https://620f9959ec8b2ee28345f7c0.mockapi.io/addcart",userData)
  
  }
  login(data: LoginData): Observable<TokenData> {
    return this.http.post<TokenData>('http://localhost:9000/login', data);
  }  

}

