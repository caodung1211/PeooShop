import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout.component';
import { RouterModule } from '@angular/router';
import { MaterialExampleModule } from 'src/material.module';
import { NavMenuModule } from 'src/app/components/nav-menu/nav-menu.module';

@NgModule({
  declarations: [MainLayoutComponent],
  imports: [
    CommonModule,
    MaterialExampleModule,
    NavMenuModule,
    RouterModule.forChild([
      {
        path: '',
        component: MainLayoutComponent,
      },
    ]),
  ],
  exports: [MainLayoutComponent],
})
export class MainLayoutModule {}
