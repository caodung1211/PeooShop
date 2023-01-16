import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../app/layouts/main-layout/main-layout.module').then(
        (m) => m.MainLayoutModule
      ),
    data: {
      breadcrumb: {
        label: 'hrm-management.department.title',
        url: 'hrm-management/department-management',
      },
    },
  },
  // {
  //   path: 'page1/:pageOneID',
  //   component: PageComponent,
  //   data: {
  //     title: 'page1',
  //     breadcrumb: [
  //       {
  //         label: 'Page1',
  //         url: ''
  //       }
  //     ]
  //   },
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
