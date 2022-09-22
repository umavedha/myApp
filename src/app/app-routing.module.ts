import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutuscomponentComponent } from './aboutuscomponent/aboutuscomponent.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactusComponent } from './contactus/contactus.component';
import { MainareacomponentComponent } from './mainareacomponent/mainareacomponent.component';
import { OurgoalComponent } from './ourgoal/ourgoal.component';

const routes: Routes = [
  {
    path: 'aboutus',
    component: AboutuscomponentComponent,
    children: [
      {
        path: 'ourgoals',
        component: OurgoalComponent,
      },
    ],
  },
  {
    path: 'home',
    component: MainareacomponentComponent,
  },
  {
    path: 'contactus',
    component: ContactusComponent,
    children: [
      {
        path: 'contactform',
        component: ContactFormComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
