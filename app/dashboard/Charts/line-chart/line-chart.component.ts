import { Component, OnInit, ViewEncapsulation, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core'; { }
import { DashboardChartServiceService } from '../../services/dashboard-chart-service.service'
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-lineChart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['../../../../../node_modules/nvd3/build/nv.d3.min.css'],
  encapsulation: ViewEncapsulation.None
  // changeDetection: ChangeDetectionStrategy.OnPush

})
export class LineChartComponent implements OnInit {
  public options: any;
  public lineData: any[] = [];

  maxYValue: number;
  minYValue: number;
  myOptions: any={};

  @Input() widgetConfig
  @Input()
  widget;
  @Input()
  resizeEvent: EventEmitter<any>;
  widgets: any[];
  lineCharts: any[]=[];

  
  constructor(private dashboardChart: DashboardChartServiceService, private dashbordService: DashboardService) { }



  ngOnInit() {
  console.log(this.widgetConfig)
    
    this.options = this.dashboardChart.lineChartOptions()
    this.fetchData();
  } 

  fetchData() {
   
    this.lineData = this.widgetConfig.widgetContent.data;

  }
}