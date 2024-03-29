import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FooterModule} from '../app/shared/footer/footer.module';
import { FilterComponent } from './shared/filter/filter.component';
import { HeaderComponent } from './shared/header/header.component';
import { ParametreComponent } from './setting/parametre/parametre.component';
import { ResetpwdComponent } from './setting/resetpwd/resetpwd.component';
import { UsersComponent } from './setting/users/users.component';
import { ProfilsComponent } from './setting/profils/profils.component';
import {QualiteModule}from '../app/qualite/qualite.module';
import { DashboardModule } from "./dashboard/dashboard.module";
import { DashboardComponent } from './dashboard/dashboard.component';
import { NvD3Module } from 'ng2-nvd3';
import 'd3';
import 'nvd3';
import{ NgxWebstorageModule}from 'ngx-webstorage'
import{CookieService} from 'angular2-cookie/services/cookies.service'

import { ButtonsModule } from "@progress/kendo-angular-buttons";
import { GridModule } from "@progress/kendo-angular-grid";
import { ChartsModule } from "@progress/kendo-angular-charts";
import { DropDownsModule } from "@progress/kendo-angular-dropdowns";
import { DialogModule } from "@progress/kendo-angular-dialog";
import { NotificationModule } from "@progress/kendo-angular-notification";
import { DatePickerModule } from "@progress/kendo-angular-dateinputs";
import { PopupModule } from "@progress/kendo-angular-popup";
import {HttpClientModule} from '@angular/common/http';


import { AuthInterceptor } from './security/auth.interceptor';
import { TemplateContentComponent } from './shared/template-content/template-content.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    HeaderComponent,
    ParametreComponent,
    ResetpwdComponent,
    UsersComponent,
    ProfilsComponent,
    TemplateContentComponent,
    

    
 
   
    
    
   
  ],
  
  imports: [
    BrowserModule,
    NgxWebstorageModule.forRoot(), 
    AppRoutingModule,
    DashboardModule,
    FooterModule,
    QualiteModule,
    NvD3Module,
    ButtonsModule,
    GridModule,
    ChartsModule,
    DropDownsModule,
    DialogModule,
    NotificationModule,
    DatePickerModule,
    PopupModule,
    HttpClientModule, 
   
  ],
 
  providers: [CookieService,AuthInterceptor],
  bootstrap: [AppComponent]
})
export class AppModule { }
