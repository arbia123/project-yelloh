import { Component, OnInit, ViewEncapsulation, Input, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { DashboardChartServiceService } from '../../services/dashboard-chart-service.service'
import { DashboardService } from '../../services/dashboard.service';
@Component({
  selector: 'app-multi-chart',
  templateUrl: './multi-chart.component.html',
  styleUrls: ['../../../../../node_modules/nvd3/build/nv.d3.min.css'],
  encapsulation: ViewEncapsulation.None
})
export class MultiChartComponent implements OnInit {
  options;
  public multiData: any[] = [];

  public dashboard: any;
  public myOptions: any = {};
  public xLabels: any;
  public minYValue: number;
  public maxYValue: number;
  @Input()
  widgetConfig;
  constructor(private dashboardChart: DashboardChartServiceService, private dashbordService: DashboardService) { }

  ngOnInit() {
    this.options = this.dashboardChart.multiChartOptions()

    this.multiData = this.widgetConfig.widgetContent.data;

  }
//   fetchData(){
//     this.dashbordService.loadWidget().subscribe((widgetData: any) => {
//     //  console.log(widgetData)
//      this.dashboard = this.dashbordService.getWidgets(widgetData.widgets)
//     //  console.log(this.dashboard)
//      this.dashboard.forEach((widget: any) => {
//        if (widget.widgetContent.type === 'multiChart') {
//          this. multiData = widget.widgetContent.data;
//          console.log("data after fetch: " + JSON.stringify(this.multiData) );
//          this. multiData.map(function(a){a.y = a.y ; return a})
//           this.multiData [0].type = "bar"
//          this.multiData [0].yAxis = 1
//          this.multiData [1].type = "scatter"
//          this.multiData [1].yAxis = 1
//          return this. multiData;
//                 };
       
       
       
//      });

//    });
//  }

}
