import { Component, OnInit, Input } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  dashboard: any[];
  
  CardData: any;
  @Input() widgetConfig;
  value1: any;
  value0: any;
  value2: any;


  constructor(private dashbordService: DashboardService) { }

  ngOnInit() {
    this.value0 = this.widgetConfig.widgetContent.cardItems[0].value;
    this.value1 = this.widgetConfig.widgetContent.cardItems[1].value;
    this.value2 = this.widgetConfig.widgetContent.cardItems[2].value;

    // this.dashbordService.loadWidget().subscribe((widgetData: any) => {
    //   console.log(widgetData)
    //   this.dashboard = this.dashbordService.getWidgets(widgetData.widgets)
    //   console.log(this.dashboard)
    //   this.dashboard.forEach((widget: any) => {
    //     if (widget.widgetContent.type === 'card') {
    //       this.cardData = widget.widgetContent.cardItems;
    //       console.log("data after fetch: " + JSON.stringify(this.cardData));
    //     }
    //   });
    // });
  }
}
