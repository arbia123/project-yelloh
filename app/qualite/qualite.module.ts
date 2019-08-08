import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QualiteComponent } from './qualite.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [QualiteComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class QualiteModule { }
