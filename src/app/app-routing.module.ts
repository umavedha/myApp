import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutuscomponentComponent } from './aboutuscomponent/aboutuscomponent.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FormComponent } from './form/form.component';
import { MainareacomponentComponent } from './mainareacomponent/mainareacomponent.component';
import { OurgoalComponent } from './ourgoal/ourgoal.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TeamComponent } from './team/team.component';
import { UsersListComponent } from './users-list/users-list.component';

const routes: Routes = [
  // {
  //   path: 'aboutus',
  //   component: AboutuscomponentComponent,
  //   children: [
  //     {
  //       path: 'ourgoals',
  //       component: OurgoalComponent,
  //     },
  //     {
  //       path: ':teamId',
  //       component: TeamComponent,
  //     },
  //   ],
  // },
  // {
  //   path: 'home',
  //   component: MainareacomponentComponent,
  // },
  // {
  //   path: 'contactus',
  //   component: ContactusComponent,
  //   children: [
  //     {
  //       path: 'contactform',
  //       component: ContactFormComponent,
  //     },
  //   ],
  // },
  // {
  //   path: '**',
  //   component: PageNotFoundComponent,
  // },

  {
    path: '',
    redirectTo: 'userlist',
    pathMatch: 'full',
  },
  {
    path: 'userlist',
    component: UsersListComponent,
  },
  {
    path: 'userlist/add-user',
    component: FormComponent,
  },
  {
    path: 'userlist/edit-user/:userId',
    component: FormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
