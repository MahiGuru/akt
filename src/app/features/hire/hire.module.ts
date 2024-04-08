import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HireComponent } from './hire.component';
import { RouterModule } from '@angular/router';


const routes = [
  { path: '', component: HireComponent }
]

@NgModule({
  declarations: [
    HireComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HireModule { }
