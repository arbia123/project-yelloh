import { Component, OnInit ,ViewEncapsulation, Input, EventEmitter,Output,ChangeDetectionStrategy, ViewChild} from '@angular/core';
import { DashboardChartServiceService } from '../../services/dashboard-chart-service.service'
import { DashboardService } from '../../services/dashboard.service';
@Component({
  selector: 'app-pieChart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['../../../../../node_modules/nvd3/build/nv.d3.min.css'], 
   encapsulation: ViewEncapsulation.None
   //changeDetection: ChangeDetectionStrategy.OnPush

})

export class PieChartComponent implements OnInit {



  @Input()
  widget;
  @Input()
  resizeEvent: EventEmitter<any>;


 public dashboard:any[]=[];

options :any={};
myOptions: any={};
public pieData: any[] = [];

  constructor(private dashboardChart: DashboardChartServiceService, private dashbordService: DashboardService)
 {

 } 
 
  ngOnInit(){
 
  this.options = this.dashboardChart.pieChartOptions(this.myOptions);
  this.fetchData();
   
  }
  

    fetchData(){
     this.dashbordService.loadWidget().subscribe((widgetData: any) => {
      console.log(widgetData)
      this.dashboard = this.dashbordService.getWidgets(widgetData.widgets)
      console.log(this.dashboard)
      this.dashboard.forEach((widget: any) => {
        if (widget.widgetContent.type === 'pieChart') {
          this. pieData = widget.widgetContent.data;
          console.log("data after fetch: " + JSON.stringify(this.pieData) );
        }
      });

    });
  }
}


