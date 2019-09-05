import { Component, OnInit, ViewEncapsulation,ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['../../../../../node_modules/nvd3/build/nv.d3.min.css'],
  //encapsulation: ViewEncapsulation.None
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class BarChartComponent implements OnInit {
  public options: any;
  public data: any;

   constructor() { }
  
    ngOnInit() {
      this.setMultibarChartOptions();
      this.fetchData();
    }
  
    setMultibarChartOptions() {
      this.options = {
        chart: {
          type: 'multiBarChart',
          height: 200,
          margin : {
            top: 20,
            right: -20,
            bottom: 45,
            left: 45
          },
          clipEdge: true,
          duration: 500,
          stacked: false,
          xAxis: {
            axisLabel: 'Time (ms)',
            showMaxMin: false,
            tickFormat: function(d){
              return d3.format(',f')(d);
            }
          },
          yAxis: {
            axisLabel: 'Y Axis',
            axisLabelDistance: -20,
            tickFormat: function(d){
              return d3.format(',.1f')(d);
            }
          }
        }
      };
    }
  
    streamLayers(n, m, o) {
      if (arguments.length < 3) { o = 0; }
      function bump(a) {
        let x = 1 / (.1 + Math.random());
        let y = 2 * Math.random() - .5;
        let z = 10 / (.1 + Math.random());
        for (var i = 0; i < m; i++) {
          var w = (i / m - y) * z;
          a[i] += x * Math.exp(-w * w);
        }
      }
      return d3.range(n).map(function() {
        let a = [];
        let i;
        for (i = 0; i < m; i++) a[i] = o + o * Math.random();
        for (i = 0; i < 5; i++) bump(a);
        return a.map(function(val, idx){
          return {x: idx, y: Math.max(0, val)};
        });
      });
    }
  
  
    fetchData() {
      this.data = this.streamLayers(3, 50 + Math.random() * 50, .1).map(function(data, i) {
        return {
          key: 'Stream' + i,
          values: data
        };
      });
    }
  

}
