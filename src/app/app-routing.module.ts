import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { HeaderComponent } from './components/header/header.component';
import { ViewComponent } from './components/view/view.component';

const routes: Routes = [
  { path: 'admin', component: HeaderComponent },
  { path: 'login', component: FormComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'guest', component: ViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
