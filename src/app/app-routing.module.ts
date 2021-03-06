import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { dataTable } from './components/data-table/data-table.component';
import { UserTableComponent } from './components/user-table/user-table.component';

const routes: Routes = [
  
  { path: '', component: LoginFormComponent },
  { path: 'register-form', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'usertable', component: UserTableComponent },
  { path: 'datatable', component: dataTable },
  { path: 'lazy', loadChildren:()=>import('./components/lazy/lazy-routing.module').then(m=>m.LazyRoutingModule)},
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
