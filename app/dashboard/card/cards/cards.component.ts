import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  dashboard: any[];
  cardData: any;

  constructor(private dashbordService: DashboardService) { }

  ngOnInit() {
    this.dashbordService.loadWidget().subscribe((widgetData: any) => {
      console.log(widgetData)
      this.dashboard = this.dashbordService.getWidgets(widgetData.widgets)
      console.log(this.dashboard)
      this.dashboard.forEach((widget: any) => {
        if (widget.widgetContent.type === 'card') {
          this.cardData = widget.widgetContent.cardItems;
          console.log("data after fetch: " + JSON.stringify(this.cardData));
        }
      });
    });
  }
}
