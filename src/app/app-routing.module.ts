import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutuscomponentComponent } from './aboutuscomponent/aboutuscomponent.component';
import { MainareacomponentComponent } from './mainareacomponent/mainareacomponent.component';

const routes: Routes = [
  {
    path: 'aboutus',
    component: AboutuscomponentComponent,
  },
  {
    path: 'dashboard',
    component: MainareacomponentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
