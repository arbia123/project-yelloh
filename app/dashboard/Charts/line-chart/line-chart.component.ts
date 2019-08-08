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
  dashbord: any[];
  dashboard: any[];
 
  @Input()
  widget;
  @Input()
  resizeEvent: EventEmitter<any>;

  
  constructor(private dashboardChart: DashboardChartServiceService, private dashbordService: DashboardService) { }

  //@Input() config;



  ngOnInit() {

    // this.options = this.config
    this.options = this.dashboardChart.lineChartOptions(this.myOptions)
    this.fetchData();
  } 

  fetchData() {
    this.dashbordService.loadWidget().subscribe((widgetData: any) => {
      console.log(widgetData)
      this.dashboard = this.dashbordService.getWidgets(widgetData.widgets)
      console.log(this.dashboard)
      this.dashboard.forEach((widget: any) => {
        if (widget.widgetContent.type === 'lineChart') {
        
          this. lineData = widget.widgetContent.data;
          console.log("data after fetch: " + JSON.stringify(this.lineData) ); }
      });

    });
  }


}
