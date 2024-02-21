import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AktHeaderComponent } from './akt-header/akt-header.component';
import { BannerComponent } from './banner/banner.component';
import { AktCardComponent } from './akt-card/akt-card.component';
import { FooterComponent } from './footer/footer.component';
import { OverviewListComponent } from './overview-list/overview-list.component';

@NgModule({
  declarations: [
    NavMenuComponent,
    AktHeaderComponent,
    BannerComponent,
    AktCardComponent,
    FooterComponent,
    OverviewListComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
  exports: [NavMenuComponent, AktHeaderComponent, BannerComponent, AktCardComponent, FooterComponent, OverviewListComponent],
})
export class ComponentModule {}
