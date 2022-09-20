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
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
