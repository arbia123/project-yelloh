import { Injectable } from '@angular/core';
import { User } from '../dashboard/models/user';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CookieService } from 'angular2-cookie';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  value:string;

  COOKIES:any;
 
  constructor(private http: HttpClient, private cookieService:CookieService) {
    //this.cookieService.put("JSESSIONID",this.value );
    console.log ( cookieService , http);
  
  

  }

  login(username: string, password: string) {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/x-www-form-urlencoded',


      })
    };  
        let server = 'http://localhost:8080/'
        let url = server.concat('CampstatDashboard/login');
        let body ="username=admin&password=admin@123";
    return this.http.post<any>(url, body,httpOptions)
        .pipe(map(user => {
            // login successful if there's a user in the response
            if (user) {
                // store user details and basic auth credentials in local storage 
                // to keep user logged in between page refreshes
                user.authdata = window.btoa(username + ':' + password);
                localStorage.setItem('currentUser', JSON.stringify(user));
            }

            return user;
        }));
}
  testApi() : Observable<HttpResponse<Object>>{
           var x =    this.cookieService.get("JSESSIONID");
            const httpOptions = {
              headers: new HttpHeaders({
                'Content-Type':  'application/x-www-form-urlencoded',
                // 'Set-Cookie': 'JSESSIONID='+  this.cookieService.get("JSESSIONID")
        
        
              }),            
             // withCredentials: true, 
              observe: 'response' as 'response',
            };  
            
            let server = 'http://localhost:8080/'
            let url = server.concat('CampstatDashboard/login');
            let body ="username=admin&password=admin@123";
        return this.http.post<HttpResponse<Object>>(url,body,httpOptions)/* .map(res => {
          console.log(res);
          let cookies = res.headers.getAll('set-cookie');
          console.log(cookies);
         
      }) */
    }









  getwidgets() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/x-www-form-urlencoded'
      })
    };  
        let server = 'http://localhost:8080'
        let url = server.concat('/CampstatDashboard/dashboardContainer/');
        let body ='{"itemList":[{"key":"hotelId","value":33},{"key":"roomCategoryTypeIdList","value":[1,2]},{"key":"wTemplateTypeId","value":1},{"key":"sameTypeOfCamping","value":false},{"key":"excellentIsChecked","value":false}]}';
    return this.http.post(url,body,httpOptions)
}




}
