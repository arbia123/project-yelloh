import { Injectable } from '@angular/core';

declare let d3: any;
@Injectable({
  providedIn: 'root'
})
export class DashboardChartServiceService {
  public options: any;
 public myOption: any;
  public $filter: any;



  constructor() {
    this.candlestickBarChartOptions();
    this.discreteBarChartOptions();
   // this.lineChartOptions(this.myOptions, this.minYValue, this.maxYValue);
  }





  /**
   * DiscreteBarChart - TYPE_ID:1
   */
  discreteBarChartOptions() {
    return {
      chart: {
        type: 'discreteBarChart',
        x: function (d) {
          return d.label;
        },
        y: function (d) {
          return d.value;
        },
        showValues: true,
        valueFormat: function (d) {
          return d3.format(',.0f')(d);
        },
        duration: 500,
        xAxis: {
          axisLabel: 'X Axis',
          axisLabelDistance: -10
        },
        yAxis: {
          axisLabel: 'Y Axis',
          axisLabelDistance: -10
        }
      }
    }
  };

  /**
   * CandlestickBarChart - TYPE_ID:2
   */
  candlestickBarChartOptions() {
    return {
      chart: {
        type: 'candlestickBarChart',
        x: function (d) {
          return d['date'];
        },
        y: function (d) {
          return d['close'];
        },
        transitionDuration: 100,
        fillOpacity: 1,
        useInteractiveGuideline: false,

        xAxis: {
          axisLabel: 'Dates',
          tickFormat: function (d: number) {
            const dt = d3.time.format('%x');
            const diff = (20000 * 86400000) + (d * 86400000);
            const curDate = +new Date();
            return dt(new Date(curDate - diff));
          },
          showMaxMin: false
        },

        yAxis: {
          axisLabel: 'Stock Price',
          tickFormat: function (d) {
            return '$' + d3.format(',.1f')(d);
          },
          showMaxMin: false
        }
      }
    }
  }

  /**
   * LineChart - TYPE_ID:3
   */
  lineChartOptions(myOptions:any) {
    return {

      chart: {
        type: 'lineChart',
        x: function (d:any) {
          return d.x;
          //console.log (d.x)
        },
        y: function (d:any) {
          return d.y;
        },
        useInteractiveGuideline: true,
        xAxis: {
          axisLabel: '',
          tickFormat: function (d:any) {
            return d3.format(',f')(d);
          },
        // xAxis: {
        //   axisLabel: '',
        //   tickFormat: function (d:any) {
        //     () => {this.formatAxisX(myOptions, d) }
        //   },
          rotateLabels: -20
        },
        // yAxis: {
        //   axisLabel: '',
        //   tickFormat: function (d:any) {
        //     if (d == null) {
        //       return null;
        //     }
        //    () =>{this.formatAxisY(this.myOptions, d)}
        //   }
        yAxis: {
          axisLabel: '',
          tickFormat: function (d:any) {
            return d3.format(',.2f')(d);
          },
        },
        showLegend: true,
        showXAxis: true,
        xScale: d3.time.scale.utc(),
        //limit the Y axis to a lower 20% rounded to the 10'
        // yDomain: [Math.floor(minYValue / 10) * 10, (Math.ceil(maxYValue / 10) * 10)],
        margin: {
          top: 30,
          right: 10,
          bottom: 25,
          left: 45
        }
      }
    };
  };

  /**
   * PieChart - TYPE_ID:4
   */
  pieChartOptions(myOptions) {
    return {
      chart: {
        type: 'pieChart',
        x: function (d:any) {
          return d.key;
        },
        y: function (d:any) {
          return d.y;
        },
        cornerRadius: 5,
        showLabels: true,
        duration: 500,
        donut: true,
        labelThreshold: 0.01,
        labelSunbeamLayout: true,
        showLegend: false,
        donutRatio: 0.4,
        tooltip: {
          // valueFormatter: function (d) {
          //  () =>{ this.formatAxisY(myOptions, d);}
          // }
        },
        margin: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        }

      }
    };
  };

  /**
   * RadarChart - TYPE_ID:5
   */
  radarChartOptions() {
    return {
      legend: {
        display: true
      },
      scale: {
        reverse: false,
        ticks: {
          beginAtZero: true,
          min: 0,
          max: 20,
          maxTicksLimit: 5,
          stepSize: 1
        }
      }
    };
  };

  /**
   * MultiBarHorizontalChart - TYPE_ID:7
   */
  multiBarHorizontalChartOptions() {
    return {
      chart: {
        type: 'multiBarHorizontalChart',
        x: function (d) {
          return d.label;
        },
        y: function (d) {
          return d.value;
        },
        showControls: false,
        showValues: true,
        duration: 500,
        showLegend: false,
        fillOpacity: 1,
        useInteractiveGuideline: true,
        xAxis: {
          showMaxMin: false,

        },
        yAxis: {
          tickFormat: function (d) {
            return d3.format(',.02f')(d);
          }
        },
        tooltip: {
          valueFormatter: function (d:any) {
            return d;
          }
        },
        margin: {
          top: 20,
          right: 10,
          bottom: 20,
          left: 45
        }
      }
    };
  };

  /**
   * MultiChart - TYPE_ID:8
   */
  multiChartOptions  () {
    return {
      chart: {
        type: 'multiChart',
        color: d3.scale.category10().range(),
        useInteractiveGuideline: true,
        showLegend: false,
        duration: 500,
        showControls: true,
        showValues: true,
        fillOpacity: 1,
        staggerLabels: true,
        clipVoronoi: false,


        // interactiveLayer: {
        //   tooltip: {
        //     enabled: true,
        //     headerEnabled: true,
        //     headerFormatter: function (d) {
        //       return d3.format(',f')(d)
        //       () =>{this.$filter('translateFilter')(xLabels[d]);}
        //     },
        //     valueFormatter: function (d) {
        //       () =>{ this.formatAxisY(myOptions, d)}
        //     }
        //   }
        // },
        xAxis: {
          showMaxMin: true,
          tickFormat: function(d) {
            return d3.format(',f')(d);
          },
          // tickFormat: function (d) {
          //   return d3.format(',f')(d);
          // // ()=> {this.$filter('translateFilter')(xLabels[d])};  
          // },

          rotateLabels: -20
        },
        yAxis1: {
          axisLabel: 'Index',
          tickFormat: function(d:any) {
            return d3.format(',.1f')(d);},
            axisLabelDistance: 20
          // tickFormat: function (d) {
          // () =>{  this.formatAxisY(myOptions, d);}
          // }
        },
        // yDomain1: [minYValue, maxYValue],
        margin: {
          top: 30,
          right: 10,
          bottom: 25,
          left: 45
        }
      }
    }
  };

  /**
   * MultiBarChart - TYPE_ID:10
   */
  multiBarChartOptions  () {
    return {
      chart: {
        type: 'multiBarChart',
        color: d3.scale.category10().range(),
        useInteractiveGuideline: true,
        showControls: false,
        showLegend: true,
        duration: 500,
        fillOpacity: 1,
        clipEdge: true,

        // interactiveLayer: {
        //   tooltip: {
        //     enabled: true,
        //     headerEnabled: true,
        //     headerFormatter: function (d:any) {
        //       return d3.format(',f')(d);

        //    //   return this.$filter('translateFilter')(xLabels[d]);
        //     },
        //     valueFormatter: function (d:any) {
        //       () =>{  this.formatAxisY(myOptions, d);}
        //     }
        //   }
        // },
        xAxis: {
          showMaxMin: true,
          tickFormat: function (d:any) {
            return d3.format(',f')(d);

          },
        },
        yAxis: {
          axisLabel: 'Y Axis',
          axisLabelDistance: -20,
          tickFormat: function(d:any){
            return d3.format(',.1f')(d);
          // tickFormat: function (d:any) {
          //   () =>{ this.formatAxisY(myOptions, d);}
          }
        },
       // yDomain1: [minYValue, maxYValue],
        margin: {
          top: 30,
          right: 10,
          bottom: 20,
          left: 45
        }
      }
    }
  };
  /**
     * format axis X
     */
  formatAxisX(myOptions :any , d:any ){
    var params = myOptions.params;
    var axisTypeX = myOptions['axisTypeX'];
    var timeFormatX = params['timeFormatX'];
    var filterX = params['filterX'];
    var fractionX = params['fractionX'];

    return this.formatValue(d, axisTypeX, timeFormatX, filterX, fractionX);
  }

	/**
	 * format axis Y
	 */
  formatAxisY(myOptions:any , d:any) {
    var params = myOptions.params;
    var axisTypeY = myOptions['axisTypeY'];
    var timeFormatY = params['timeFormatY'];
    var filterY = params['filterY'];
    var fractionY = params['fractionY'];
    return this.formatValue(d, axisTypeY, timeFormatY, filterY, fractionY);
  }

	/**
	 * format value
	 */
  formatValue(d:any, axisType:string, timeFormat:any, filter:any, fraction:any) {
    switch (axisType.toLowerCase()) {
      case 'date':
        
      return this.$filter('date')(d, timeFormat, 'UTC');
      case 'string':
        return this.$filter('translateFilter')(d);
      case 'number':
        return this.$filter('appFilter')(d, filter, fraction);
      default:
        return d;
    }
  }

}








