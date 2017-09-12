
import {NgModule} from '@angular/core';
import {CovalentLayoutModule } from '@covalent/core';
import {CommonModule} from '@angular/common';
import {MdMenuModule} from '@angular/material';
import {MdButtonModule} from '@angular/material';
import {MdListModule} from '@angular/material';
import {MdIconModule} from '@angular/material';
import {MdButtonToggleModule} from '@angular/material';
import {MdSidenavModule} from '@angular/material';
import {MdToolbarModule} from '@angular/material';
import {MdTooltipModule} from '@angular/material';
import {MdGridListModule} from '@angular/material';
import {MaterialModule } from '@angular/material';
import {LayoutRoutingModule} from './layout-routing.module';
import {FullLayoutComponent} from '../layout/full-layout.component';
import {HomePageComponent} from './home-page.component';
import {AuthGuard} from '../core/services/guards/auth.guard';
import {FeaturesModule} from '../features/features.module';
import {CoreModule} from '../core/core.module';
import 'hammerjs';

@NgModule({
  declarations: [
     FullLayoutComponent,
     HomePageComponent,
   ],
  imports: [
    CovalentLayoutModule,
    CommonModule,
    MdMenuModule,
    MdButtonModule,
    MdListModule,
    MdIconModule,
    MdSidenavModule,
    MdToolbarModule,
    MdTooltipModule,
    LayoutRoutingModule,
    MaterialModule,
    MdButtonToggleModule,
    MdGridListModule,
    MaterialModule,
     FeaturesModule,
     CoreModule
  ],
    providers: [
      AuthGuard
    ],

})
export class LayoutModule { }
