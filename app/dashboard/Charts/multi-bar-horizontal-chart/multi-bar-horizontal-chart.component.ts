import { Component, OnInit ,ViewEncapsulation, Input, EventEmitter,ChangeDetectionStrategy} from '@angular/core';
import { DashboardChartServiceService } from '../../services/dashboard-chart-service.service'
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-multi-bar-horizontal-chart',
  templateUrl: './multi-bar-horizontal-chart.component.html',
  styleUrls: ['../../../../../node_modules/nvd3/build/nv.d3.min.css'], 
  encapsulation: ViewEncapsulation.None
})
export class MultiBarHorizontalChartComponent implements OnInit {
  options;
  myOptions: any;
  dashboard: any[];
  data: any;

  constructor(private dashboardChart: DashboardChartServiceService, private dashbordService: DashboardService) { }

  ngOnInit() {
    this.options = this.dashboardChart.multiBarHorizontalChartOptions()
 
    this.fetchData();
  }
  fetchData(){
    this.dashbordService.loadWidget().subscribe((widgetData: any) => {
      console.log(widgetData)
      this.dashboard = this.dashbordService.getWidgets(widgetData.widgets)
      console.log(this.dashboard)
      this.dashboard.forEach((widget: any) => {
        if (widget.widgetContent.type === 'multiBarHorizontalChart') {
           this.data = widget.widgetContent.data   }
      });
  
    });
  }
}
