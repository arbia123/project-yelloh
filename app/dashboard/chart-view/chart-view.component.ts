import { Component, OnInit,ViewEncapsulation, Input } from '@angular/core';
import { DashboardChartServiceService } from '../services/dashboard-chart-service.service';
import {DashboardService} from '../services/dashboard.service';
@Component({
  selector: 'app-chart-view',
  templateUrl: './chart-view.component.html',
  styleUrls: ['./chart-view.component.css']
})
export class ChartView implements OnInit {
  constructor(private dashboardService: DashboardChartServiceService ,private dashService:DashboardService) { }
  @Input() config;
  @Input () dataPie;
  ngOnInit() { 
    console.log(this.config)
    console.log(this.dataPie)
  }
}