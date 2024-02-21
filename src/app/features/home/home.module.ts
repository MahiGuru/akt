import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { ComponentModule } from '../../components/component.module';


const routes = [{ path: '', component: HomeComponent }];


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ComponentModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
