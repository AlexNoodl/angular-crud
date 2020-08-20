import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TableFormComponent} from "./table/table-form/table-form.component";
import {TableComponent} from "./table/table.component";
import {TableEditComponent} from "./table/table-edit/table-edit.component";


const routes: Routes = [
  {
    path: '', children: [
      {
        path: '', redirectTo: '/', pathMatch: 'full'
      },
      {
        path: '', component: TableComponent
      },
      {
        path: 'create', component: TableFormComponent
      },
      {
        path: 'edit/:id', component: TableEditComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
