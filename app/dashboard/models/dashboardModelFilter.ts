export class DashboardModelFilter {
    RoomCategoryTypeId :number;
    id :number;
    dashboardModelFilter(RoomCategoryTypeId:number,hotelId:number){
        this.RoomCategoryTypeId= RoomCategoryTypeId;
        this.id =hotelId;
    }

}