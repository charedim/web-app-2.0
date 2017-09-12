
import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';
import {MdCardModule} from '@angular/material';
import {MdMenuModule} from '@angular/material';
import {MdInputModule} from '@angular/material';
import {MdButtonModule} from '@angular/material';
import {MdListModule} from '@angular/material';
import {MdIconModule} from '@angular/material';
import {MdButtonToggleModule} from '@angular/material';
import {MdSidenavModule} from '@angular/material';
import {MdToolbarModule} from '@angular/material';
import {MdTooltipModule} from '@angular/material';
import {MdDialogModule} from '@angular/material';
import {MdGridListModule} from '@angular/material';
import {MaterialModule } from '@angular/material';
import {MdRadioModule} from '@angular/material';


import {CovalentSearchModule } from '@covalent/core';
import { CovalentFileModule } from '@covalent/core';
import { CovalentChipsModule } from '@covalent/core';
import { CovalentDialogsModule } from '@covalent/core';
import { CovalentDataTableModule } from '@covalent/core';
import { TdDataTableService, TdDataTableSortingOrder,
   ITdDataTableSortChangeEvent, ITdDataTableColumn } from '@covalent/core';
import { TdLoadingService } from '@covalent/core';
import { CovalentLoadingModule } from '@covalent/core';
import { IPageChangeEvent, CovalentPagingModule } from '@covalent/core';
import { CovalentNotificationsModule } from '@covalent/core';
import { CovalentExpansionPanelModule } from '@covalent/core';

import 'hammerjs';

@NgModule({
 declarations: [
  ],
 imports: [
  CommonModule,
  MdCardModule,
  MdMenuModule,
  MdInputModule,
  MdButtonModule,
  MdListModule,
  MdIconModule,
  MdSidenavModule,
  MdToolbarModule,
  MdTooltipModule,
  MdDialogModule,
  MaterialModule,
  CovalentFileModule,
  CovalentDataTableModule,
  CovalentPagingModule,
  CovalentNotificationsModule,
  CovalentExpansionPanelModule,
  MdButtonToggleModule,
  CovalentSearchModule,
  CovalentChipsModule,
  MdGridListModule,
  CovalentDialogsModule,
  MaterialModule,
  MdRadioModule,
  CovalentLoadingModule,
 ],
 providers: [
   TdDataTableService,
   TdLoadingService
   ],
 exports: [
 CommonModule,
 MdCardModule,
 MdMenuModule,
 MdInputModule,
 MdButtonModule,
 MdListModule,
 MdIconModule,
 MdSidenavModule,
 MdToolbarModule,
 MdTooltipModule,
 MdDialogModule,
 MaterialModule,
 CovalentFileModule,
 CovalentDataTableModule,
 CovalentPagingModule,
 CovalentNotificationsModule,
 CovalentExpansionPanelModule,
 MdButtonToggleModule,
 CovalentSearchModule,
 CovalentChipsModule,
 MdGridListModule,
 CovalentDialogsModule,
 MdRadioModule,
 MaterialModule,
  ]

})
export class CovalentTeraDataModule { }
