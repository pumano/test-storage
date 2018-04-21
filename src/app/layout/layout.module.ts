import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';

import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { AppNotificationComponent } from './app-notification/app-notification.component';
import { SharedModule } from '../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule,
    TranslateModule.forChild()
  ],
  declarations: [
    HeaderComponent,
    AppNotificationComponent,
    LayoutComponent
  ]
})
export class LayoutModule { }
