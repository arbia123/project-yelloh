import { Component, OnInit } from '@angular/core';
declare var module: {
  id: string;
}
@Component({
  moduleId: module.id,
  selector: 'app-qualite',
  templateUrl: './qualite.component.html',
  styleUrls: ['./qualite.component.css']
})
export class QualiteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
