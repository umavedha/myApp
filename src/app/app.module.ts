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

@NgModule({
  declarations: [
    AppComponent,
    HeadercomponentComponent,
    FootercomponentComponent,
    MainareacomponentComponent,
    SidebarcomponentComponent,
    DatabindingComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
