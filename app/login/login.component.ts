import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../security/authentication.service';
import { User } from '../dashboard/models';
import { CustomerService } from './customer.service';
import { promise } from 'protractor';
import { CookieService } from 'angular2-cookie';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    error = '';
    private _sessionId: string;


    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private cookieService:CookieService)
         {  
        }

    ngOnInit() {
      
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        // reset login status
        // this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
   
    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        this.authenticationService.testApi(/*this.f.username.value, this.f.password.value*/)
            .subscribe( (response) => {
              

                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.error = error;
                    this.loading = false;
                });
    }


































  //  tryLogin() {
  //     this.auth.login(
  //      this.user)
  //       .subscribe(
  //         r => {
  //           // if (r.cookie) {
  //           //  this.custom.setCookie(r.cookie);
  //             this.router.navigate(['/dashboard']);
  //           // }
  //         },
  //         r => {
  //           alert(r.error.error);
  //         });
  //   }























  // tryTest() {
  //   var me = this.auth;
  //   this.auth.testApi()
  //     .subscribe(
  //       data => {
  //         this.router.navigate(['/dashboard']);
  //         console.log('ffffff', data);
  //         // me.getwidgets().subscribe( 
  //         //   data=>{
  //         //     console.log('ffffff',data)
  //         //   },
  //         //   error  => {

  //         //     console.log("Error", error);

  //         //     }
  //         // )
        
  //         console.log('hhhhj')
  //       },
  //       error => {

  //         console.log("Error", error);

  //       }
  //     )

  // }



}
