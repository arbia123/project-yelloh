import { Component, OnInit,Input  } from '@angular/core';
import {Router} from '@angular/router';
import  Hotels from '../../../assets/data/hotels.json';
import Category from '../../../assets/data/DefRoomCategory.json';
import TypeRoom from '../../../assets/data/RoomCategoryType.json';

import {DataService} from '../../services/data.service';
import {CommonService} from '../common.service';
import { DashboardModelFilter } from 'src/app/dashboard/models/dashboardModelFilter';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Input() Filter:DashboardModelFilter;
 hotels :any =Hotels
 category :any = Category
 typeRoom :any =TypeRoom
  isvalid: boolean;
  dashboardFilter={RoomCategoryTypeId:0, id:0};
  RoomCategoryTypeId: number;
  constructor( private router :Router , private dataService :DataService ,private commonService: CommonService ) {
   
  }

  ngOnInit() {
    this.commonService.getHotels()
    .subscribe( data => {
        this.hotels = data;
    });
    this.commonService.getRoomCategory()
    .subscribe(data => {
      this.category =data;
    });

    this.commonService.getRoomType()
    .subscribe(data=>{
      this.typeRoom =data;
    });

    this.isvalid = this.dataService.isvisible;
    console.log(this.isvalid);
  }
  // getHotel(){
  //   return this.commonService.getHotels()
  // }
  // getCategory(){
  //   return this.commonService.getRoomCategory()
  // }
  // getType(){
  //   return this.commonService.getRoomType()
  // }
 
  filterCategory(RoomCategoryTypeId,dashboardFilter) {
    this.dashboardFilter.RoomCategoryTypeId=RoomCategoryTypeId;
    this.dashboardFilter= dashboardFilter

  }

 filterhotel(id,dashboardFilter) {
    this.dashboardFilter.id =id;
    this.dashboardFilter= dashboardFilter
  }
  
}

