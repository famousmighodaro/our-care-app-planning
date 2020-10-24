import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import  {SketchesComponent} from './sketches/sketches.component';


const routes:Routes = [
 {
 	path: 'sketeches',
 	component: SketchesComponent
 }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
