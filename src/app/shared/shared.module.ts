import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MaterialExampleModule } from 'src/material.module';


@NgModule({
    imports: [
      MaterialExampleModule
    ],
    declarations: [
        // HasAnyAuthorityDirective,
        // BreadcrumbComponent,
        // ConfirmDialogComponent,
        // DatePickerFormatDirective,
        // ChartLineComponent,
        // TextSlicePipe
    ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialExampleModule
  ]
})
export class SharedModule {
}
