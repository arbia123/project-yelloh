import { Component, OnInit, Input } from '@angular/core';
import { DashboardChartServiceService } from '../../services/dashboard-chart-service.service'
import { DashboardService } from '../../services/dashboard.service';
@Component({
  selector: 'app-multi-bar-chart',
  templateUrl: './multi-bar-chart.component.html',
  styleUrls: ['./multi-bar-chart.component.css']
})
export class MultiBarChartComponent implements OnInit {
  public dashboard:any[]=[];

  options :any={};
  myOptions: any={};
  public multiBarData: any[] = [];
   xLabels:any; 
   minYValue:number;
   maxYValue :number;
 
   @Input()
   widget;
  constructor(private dashboardChart: DashboardChartServiceService, private dashbordService: DashboardService)
   { }

  ngOnInit() {
    this.options = this.dashboardChart.multiBarChartOptions();
  this.fetchData();
  }
  fetchData(){
    this.dashbordService.loadWidget().subscribe((widgetData: any) => {
     console.log(widgetData)
     this.dashboard = this.dashbordService.getWidgets(widgetData.widgets)
     console.log(this.dashboard)
     this.dashboard.forEach((widget: any) => {
       if (widget.widgetContent.type === 'multiBarChart') {
         this. multiBarData = widget.widgetContent.data;
         console.log("data after fetch: " + JSON.stringify(this.multiBarData) );
        

       }
     });

   });
 }
}
