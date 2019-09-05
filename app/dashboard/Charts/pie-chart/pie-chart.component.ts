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
@Input() widgetConfig
  constructor(private dashboardChart: DashboardChartServiceService, private dashbordService: DashboardService)
 {

 } 
 
  ngOnInit(){
 
  this.options = this.dashboardChart.pieChartOptions();
  this.pieData = this.widgetConfig.widgetContent.data;

   
  }
  

   

}
