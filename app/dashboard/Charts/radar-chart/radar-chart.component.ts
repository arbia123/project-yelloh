import { Component, OnInit ,ViewEncapsulation, Input, EventEmitter,ChangeDetectionStrategy} from '@angular/core';
import { DashboardChartServiceService } from '../../services/dashboard-chart-service.service'
import { DashboardService } from '../../services/dashboard.service';
@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['../../../../../node_modules/nvd3/build/nv.d3.min.css'], 
  encapsulation: ViewEncapsulation.None})
export class RadarChartComponent implements OnInit {
  data: any;
  dashboard: any[];
  options;

  constructor(private dashboardChart: DashboardChartServiceService, private dashbordService: DashboardService) { }

  ngOnInit() {
    this.options = this.dashboardChart.radarChartOptions()
 
    this.fetchData();
  }
  fetchData(){
    this.dashbordService.loadWidget().subscribe((widgetData: any) => {
      console.log(widgetData)
      this.dashboard = this.dashbordService.getWidgets(widgetData.widgets)
      console.log(this.dashboard)
      this.dashboard.forEach((widget: any) => {
        if (widget.widgetContent.type === 'radarChart') {
           this.data = widget.widgetContent.data   }
      });
  
    });
  }
}
