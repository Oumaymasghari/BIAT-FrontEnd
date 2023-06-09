import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapComponent } from "../../pages/map/map.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UserComponent } from "../../pages/user/user.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
import { PostsComponent } from "src/app/pages/posts/posts.component";
import { VenteachatComponent } from "src/app/pages/venteachat/venteachat.component";
import { NouvelleventeComponent } from "src/app/pages/nouvellevente/nouvellevente.component";
import { VenteComponent } from "src/app/pages/vente/vente.component";
import { AmicaleComponent } from "src/app/pages/amicale/amicale.component";
import { BonPlanComponent } from "src/app/pages/bon-plan/bon-plan.component";




export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "icons", component: IconsComponent },
  { path: "maps", component: MapComponent },
  { path: "notifications", component: NotificationsComponent },
  { path: "user", component: UserComponent },
  { path: "tables", component: TablesComponent },
  { path: "typography", component: TypographyComponent },

  { path: "posts", component: PostsComponent },
  { path: "Venteachat", component: VenteachatComponent },
  { path: "Vente", component: VenteComponent },
  { path: "nouvellevente", component: NouvelleventeComponent },
  { path: "amicale", component: AmicaleComponent },
  { path: "bonPlan", component: BonPlanComponent }


  // { path: "rtl", component: RtlComponent }
];
