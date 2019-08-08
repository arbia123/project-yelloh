import { Injectable } from '@angular/core';
import { Dashboard, User, DashboardOptions } from "./../models";
import { GridType, CompactType } from "angular-gridster2";
import { CardsComponent } from './../card/cards/cards.component';
import { MultiBarHorizontalChartComponent } from '../Charts/multi-bar-horizontal-chart/multi-bar-horizontal-chart.component';
import { LineChartComponent } from './../Charts/line-chart/line-chart.component';
import { BarChartComponent } from './../Charts/bar-chart/bar-chart.component';
import { PieChartComponent } from './../Charts/pie-chart/pie-chart.component';
import { DashboardChartServiceService } from '../../dashboard/services/dashboard-chart-service.service'
import {WidgetList} from './../models/widgetList';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import * as _ from "lodash";



interface IDashboardService {
  getUserDashBoards(user: User): Array<Dashboard>;
  saveUserDashBoards(user: User): void;
  getDashBoardOptions(): DashboardOptions;
}
@Injectable({
  providedIn: 'root'
})
export class DashboardService implements IDashboardService {
  private userDashboards: Map<string, Array<Dashboard>> = new Map<string, Array<Dashboard>>();
  public widgetContent: any;
  public widget:any  ;
  
  private _url:string ="../../assets/data/widget.json"
  public subjectWidgets = new BehaviorSubject<any[]>([]);


  constructor(private dashboradService: DashboardChartServiceService
     , private http: HttpClient) {
  
  }


 
  loadWidget():Observable<WidgetList []>{
  return this.http.get<WidgetList []>(this._url)
}
  public getUserDashBoards(user: User): Array<Dashboard> {
    return this.userDashboards.get(user.id);
  }

  public saveUserDashBoards(user: User): void {
    localStorage.setItem(user.id, JSON.stringify(this.userDashboards.get(user.id)));
  }

  public getDashBoardOptions(): DashboardOptions {
    return {
      gridType: GridType.Fit,
      compactType: CompactType.None,
      margin: 10,
      outerMargin: true,
      outerMarginTop: null,
      outerMarginRight: null,
      outerMarginBottom: null,
      outerMarginLeft: null,
      mobileBreakpoint: 737,
      minCols: 2,
      maxCols: 8,
      minRows: 1,
      maxRows: 100,
      maxItemCols: 100,
      minItemCols: 1,
      maxItemRows: 100,
      minItemRows: 1,
      maxItemArea: 1000,
      minItemArea: 1,
      defaultItemCols: 1,
      defaultItemRows: 1,
      fixedColWidth: 105,
      fixedRowHeight: 105,
      keepFixedHeightInMobile: false,
      keepFixedWidthInMobile: false,
      scrollSensitivity: 10,
      scrollSpeed: 20,
      enableEmptyCellClick: false,
      enableEmptyCellContextMenu: false,
      enableEmptyCellDrop: false,
      enableEmptyCellDrag: false,
      emptyCellDragMaxCols: 50,
      emptyCellDragMaxRows: 50,
      ignoreMarginInRow: false,
      draggable: {
        delayStart: 0,
        enabled: true,
        ignoreContentClass: "gridster-item-content",
        ignoreContent: true,
        dragHandleClass: "drag-handler",
        dropOverItems: false
      },
      resizable: {
        enabled: true,
        handles: {
          s: true,
          e: true,
          n: false,
          w: true,
          se: true,
          ne: false,
          sw: true,
          nw: false
        }
      },
      swap: false,
      pushItems: true,
      disablePushOnDrag: false,
      disablePushOnResize: false,
      pushDirections: { north: true, east: true, south: true, west: true },
      pushResizeItems: false,
      displayGrid: function () { },
      disableWindowResize: false,
      disableWarnings: false,
      scrollToNewItems: false,
      itemChangeCallback: function () { },
      itemResizeCallback: function () { }
    }
  
}


  instanciateWidget(widget){
    var widgetResult = {
     templateId: widget.templateId,
      //wTemplateTypeId : widget.wTemplateTypeId,
      screenTarget: widget.screenTarget,
      dataTarget: widget.dataTarget,
      name: widget.name == undefined ? 'Analysis Name' : widget.name,
      rawTemplateName: widget.rawTemplateName == undefined ? 'Raw Template Name' : widget.rawTemplateName,
      wTemplateTypeId: widget.wTemplateTypeId == undefined ? 'w Template Type Id Name' : widget.wTemplateTypeId,
      col: widget.col,
      row: widget.row,
      sizeY: widget.sizeY == undefined ? 2 : widget.sizeY,
      sizeX: widget.sizeX == undefined ? 2 : widget.sizeX,
      widgetContent: widget.widgetContent,
    }
    return widgetResult; 
  };

  getWidgets(widgets) {
    var widgetResultList = [];
    var me = this;
		_.map(widgets, function (widget) {
			var widgetResult = me.instanciateWidget(widget);
			var widgetContent = widget.widgetContent;
			var type = widgetContent.type;
			if (type == 'card') {
				// widgetContent of cards
				widgetResult.widgetContent.type = widgetContent.type;
				widgetResult.widgetContent.cssClass = widgetContent.cssClass;
				widgetResult.widgetContent.cardItems = widgetContent.cardItems;
			} else {
				// widgetContent of charts
				widgetResult.widgetContent.type = type;
        widgetResult.widgetContent.chart = widgetContent.options;
        delete widgetResult.widgetContent.options;
			//	widgetResult.widgetContent.data = this.getwidgetContentData(widgetContent);
			}
			widgetResultList.push(widgetResult);
		});
		return widgetResultList;
  }
  
  	/**
	 *  translate key for every chart  
	 */
	getwidgetContentData(widgetContent) {
	
		var options = widgetContent.options;
		var data = _.sortBy(widgetContent.data,'order');
		return data;
	}
	



  instanciateChart(widgetContent) {
    var type = widgetContent.type;
    var options = widgetContent.options;
    var chart = this.getChartOptions(widgetContent);
    return chart;
  };

  /**
   * create chart options for every chart
   */
  getChartOptions(widgetContent) {
    var type = widgetContent.type;
    var options = widgetContent.options;

    var optionsResult = null;
    switch (type) {
      case 'discreteBarChart':
        optionsResult = this.dashboradService.discreteBarChartOptions();
        break;
      case 'pieChart':
        optionsResult = this.dashboradService.pieChartOptions(options);
        break;
      case 'lineChart':
        // get the min/max of lineChartData Y axis
        var minYValue = this.getMinYAxis(widgetContent);
        var maxYValue = this.getMaxYAxis(widgetContent);
        optionsResult = this.dashboradService.lineChartOptions(options);
        break;
      case 'radarChart':
        optionsResult = this.dashboradService.radarChartOptions();
        break;
      case 'multiBarHorizontalChart':
        optionsResult = this.dashboradService.multiBarHorizontalChartOptions();
        break;
      case 'multiChart':
        // get X axis labels
        var xLabels = this.getXLabels(widgetContent);
        // get the min/max of multiChartData Y axis
        var minYValue = this.getMinYAxis(widgetContent);
        var maxYValue = this.getMaxYAxis(widgetContent);
        optionsResult = this.dashboradService.multiChartOptions();
        break;
      case 'multiBarChart':
        // get X axis labels
        var xLabels = this.getXLabels(widgetContent);
        // get the min/max of multiBarChartData Y axis
        var minYValue = this.getMinYAxis(widgetContent);
        var maxYValue = this.getMaxYAxis(widgetContent);
        optionsResult = this.dashboradService.multiBarChartOptions();
        break;
      default:
        break;
    }
    return optionsResult;
  };

  /**
     * get X axis labels
     */
  getXLabels(widgetContent:any) {
    var xLabels:any;
    var widgetData = widgetContent.data[0];
    if (widgetData) {
      xLabels = widgetData.xLabels;
    } else {
      xLabels = {};
    }
    return xLabels;
  }

  /**
   * get min of Y axis 
   * if min>0 return 0 else return min
   */
  
  getMinYAxis(widgetContent:any) {
		var options = widgetContent.options;
		var params = options.params;
		var startFromMinYValue = params['startFromMinYValue'];
		var data = widgetContent.data;
		var firstDataRow = data[0];
		if (! firstDataRow) {
			return undefined;
		}
		var minList = [];
		_.map(data, function(dataRow) {
			var values = dataRow.values;
			var min = _.min(values, function(value:any){ if ( value.y >0 )  return value.y; });
			minList.push(min);
		});
		var minResult = _.min(minList, function(value:any){ return value.y; });
		var minValue = minResult.y;
		if (startFromMinYValue) {
			return minValue;
		}
		if (minValue > 0) {
			return 0;
		}
		return minValue;
	}

  /**
   * get max of Y axis 
   */
   getMaxYAxis(widgetContent:any) {
		var data = widgetContent.data;
		var firstDataRow = data[0];
		if (! firstDataRow) {
			return undefined;
		}
		var maxList = [];
		_.map(data, function(dataRow) {
			var values = dataRow.values;
			var max = _.max(values, function(value:any){ return value.y; });
			maxList.push(max);
		});
		var maxResult = _.max(maxList, function(row:any){ return row.y; });
		var maxValue = maxResult.y;
		return maxValue;
	}
	
}

