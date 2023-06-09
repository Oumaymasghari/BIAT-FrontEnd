import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from "./app.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app-routing.module";
import { ComponentsModule } from "./components/components.module";
import { PostsComponent } from "./pages/posts/posts.component";
import { TokenInterceptorService } from "./shared/Services/tokenInterceptor/token-interceptor.service";
import { VenteachatComponent } from './pages/venteachat/venteachat.component';
import { NouvelleventeComponent } from './pages/nouvellevente/nouvellevente.component';
import { ReactiveFormsModule } from '@angular/forms';
import { VenteComponent } from './pages/vente/vente.component';
import { AmicaleComponent } from './pages/amicale/amicale.component';
import { BonPlanComponent } from './pages/bon-plan/bon-plan.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    ToastrModule.forRoot()
  ],
  declarations: [AppComponent, AdminLayoutComponent, AuthLayoutComponent, PostsComponent, VenteachatComponent, NouvelleventeComponent, VenteComponent, AmicaleComponent, BonPlanComponent],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule {}
