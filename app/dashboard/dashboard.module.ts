import { NgModule  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridsterModule } from 'angular-gridster2';
import { DashboardComponent } from './dashboard.component';
import { CardsComponent } from './card/cards/cards.component';
import { LineChartComponent } from './Charts/line-chart/line-chart.component';
import { BarChartComponent } from './Charts/bar-chart/bar-chart.component';
import { PieChartComponent } from './Charts/pie-chart/pie-chart.component';
import { DiscreetBarComponent } from './Charts/discreet-bar/discreet-bar.component';
import { CandlestickBarChartComponent } from './Charts/candlestick-bar-chart/candlestick-bar-chart.component';
import { NvD3Module } from 'ng2-nvd3';
import 'd3';
import 'nvd3';
import { DynamicModule } from "ng-dynamic-component";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { HttpClientModule} from '@angular/common/http';
import { ButtonsModule } from "@progress/kendo-angular-buttons";
import { GridModule } from "@progress/kendo-angular-grid";
import { ChartsModule } from "@progress/kendo-angular-charts";
import { DropDownsModule } from "@progress/kendo-angular-dropdowns";
import { DialogModule } from "@progress/kendo-angular-dialog";
import { NotificationModule } from "@progress/kendo-angular-notification";
import { DatePickerModule } from "@progress/kendo-angular-dateinputs";
import { PopupModule } from "@progress/kendo-angular-popup";
import { ChartView } from './chart-view/chart-view.component';
import { MultiBarHorizontalChartComponent } from './Charts/multi-bar-horizontal-chart/multi-bar-horizontal-chart.component';
import { RadarChartComponent } from './Charts/radar-chart/radar-chart.component';
import { MultiChartComponent } from './Charts/multi-chart/multi-chart.component';
import { MultiBarChartComponent } from './Charts/multi-bar-chart/multi-bar-chart.component';
import { DashboardChartServiceService } from './services/dashboard-chart-service.service';
import { DashboardService } from './services/dashboard.service';

import {LoginComponent} from '../login/login.component'

@NgModule({
  declarations: [DashboardComponent,
    LineChartComponent,
    BarChartComponent,
    PieChartComponent,
    DiscreetBarComponent,
    CandlestickBarChartComponent,
    CardsComponent,
    ChartView,
    MultiBarHorizontalChartComponent,
    RadarChartComponent,
    MultiChartComponent,
    MultiBarChartComponent,
    LoginComponent,
  
    
  ],
  imports: [
    CommonModule,
    GridsterModule,
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
    FormsModule,    
    ReactiveFormsModule,



    DynamicModule.withComponents([PieChartComponent, CardsComponent, BarChartComponent,DiscreetBarComponent,CandlestickBarChartComponent,LineChartComponent,MultiBarHorizontalChartComponent,RadarChartComponent,MultiChartComponent,MultiBarChartComponent ])

  ],
  exports:[
    DashboardComponent,
    MultiBarHorizontalChartComponent,
      LineChartComponent,
      BarChartComponent,
      PieChartComponent,
      DiscreetBarComponent,
      CandlestickBarChartComponent,
      CardsComponent,RadarChartComponent,
      MultiChartComponent,
      MultiBarChartComponent
 

  ],
  providers:[
    DashboardChartServiceService,
    DashboardService
  ]
})
export class DashboardModule {}
