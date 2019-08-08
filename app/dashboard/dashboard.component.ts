import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation, EventEmitter } from '@angular/core';
import { CompactType, DisplayGrid, GridsterConfig, GridsterItem, GridType } from 'angular-gridster2';
import { PieChartComponent } from './Charts/pie-chart/pie-chart.component';
import { CardsComponent } from './card/cards/cards.component';
import { MultiBarHorizontalChartComponent } from './Charts/multi-bar-horizontal-chart/multi-bar-horizontal-chart.component';
import { LineChartComponent } from './Charts/line-chart/line-chart.component';
import { RadarChartComponent } from './Charts/radar-chart/radar-chart.component';
import { DashboardService } from '../dashboard/services/dashboard.service';
import { MultiChartComponent } from './Charts/multi-chart/multi-chart.component';
import { DashboardOptions } from './models/dashboard-options'
import 'rxjs/add/operator/map';


export { };
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  //changeDetection: ChangeDetectionStrategy.OnPush

})
export class DashboardComponent implements OnInit {

  // public options: GridsterConfig;
  // dashboard: Array<GridsterItem>;
  private resizeEvent: EventEmitter<any> = new EventEmitter<any>();
  private configureEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  public showConfig: boolean = false;
  options: DashboardOptions;
  widgets: any[];


  constructor(private dashboardService: DashboardService) {

  }

  ngOnInit() {

    this.options = this.dashboardService.getDashBoardOptions();
    this.options.displayGrid = DisplayGrid.OnDragAndResize;
    this.options.itemChangeCallback = (item) => {
      // update DB with new size
      // send the update to widgets
      this.resizeEvent.emit(item);
    };

    this.options.itemResizeCallback = (item) => {
      // update DB with new size
      // send the update to widgets
      this.resizeEvent.emit(item);
    };
    this.dashboardService.loadWidget().subscribe((widgetData: any) => {
      //console.log(widgetData)
      this.widgets = this.dashboardService.getWidgets(widgetData.widgets)
      //console.log(this.dashboard)
      // this.widgets.forEach((widget: any) => {

      //  this.dashboard.push(widget)



      // });


    });

  }
}




