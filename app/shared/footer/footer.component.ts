import { Component } from '@angular/core';
declare var module: {
  id: string;
}
@Component({
  
  moduleId: module.id,
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent  {

     test : Date = new Date();


}
