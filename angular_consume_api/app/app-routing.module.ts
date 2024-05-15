import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AngularAPIComponent } from './angular-api/angular-api.component';
import { BankDetailsComponent } from './bank-details/bank-details.component';
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'getall',component:AngularAPIComponent},
  {path:'insert',component:AddComponent},
  {path:'update/:id',component:EditComponent},
  {path:'getbyid/:id',component:BankDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
