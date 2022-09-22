import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadercomponentComponent } from './headercomponent/headercomponent.component';
import { FootercomponentComponent } from './footercomponent/footercomponent.component';
import { MainareacomponentComponent } from './mainareacomponent/mainareacomponent.component';
import { SidebarcomponentComponent } from './sidebarcomponent/sidebarcomponent.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { FormsModule } from '@angular/forms';
import { DatabindtaskComponent } from './databindtask/databindtask.component';
import { DirectivesComponent } from './directives/directives.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ToDoInputComponent } from './to-do-input/to-do-input.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { AboutuscomponentComponent } from './aboutuscomponent/aboutuscomponent.component';
import { ContactusComponent } from './contactus/contactus.component';
import { OurgoalComponent } from './ourgoal/ourgoal.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { TeamComponent } from './team/team.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadercomponentComponent,
    FootercomponentComponent,
    MainareacomponentComponent,
    SidebarcomponentComponent,
    DatabindingComponent,
    DatabindtaskComponent,
    DirectivesComponent,
    ParentComponent,
    ChildComponent,
    UsersListComponent,
    UserDetailsComponent,
    ToDoInputComponent,
    ToDoListComponent,
    AboutuscomponentComponent,
    ContactusComponent,
    OurgoalComponent,
    ContactFormComponent,
    TeamComponent,
    PageNotFoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
