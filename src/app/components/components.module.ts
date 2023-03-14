import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule }   from '@angular/forms';
import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { AcceuilComponent } from './acceuil/acceuil.component';
import {MatSelectModule} from '@angular/material/select';
import { AcceuilPageComponent } from "./acceuil_page/acceuilpage.component";
import { TestComponent } from "./test/test.component";
import { HomeComponent } from "../home/home.component";
import { ReactComponent } from './react/react.component';





@NgModule({
  imports: [CommonModule, 
            RouterModule,
            NgbModule,
            MatSelectModule,
            FormsModule],
  declarations: [FooterComponent, NavbarComponent, SidebarComponent, AcceuilComponent, AcceuilPageComponent,TestComponent, HomeComponent, ReactComponent],
  exports: [FooterComponent, NavbarComponent, SidebarComponent,AcceuilComponent, AcceuilPageComponent,TestComponent, HomeComponent, ReactComponent]
})
export class ComponentsModule {}
