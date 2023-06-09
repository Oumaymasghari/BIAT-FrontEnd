import { Component, OnInit } from "@angular/core";
import { combineLatest, forkJoin, map, of } from "rxjs";
import { ERoleModule } from "src/app/shared/Module/erole/erole.module";
import { UserService } from "src/app/shared/Services/user/user.service";

declare interface RouteInfo {
  path: string;
  title: string;
  rtlTitle: string;
  icon: string;
  class: string;
  roles?: ERoleModule[]; 
}
export const ROUTES: RouteInfo[] = [
  // {
  //   path: "/dashboard",
  //   title: "Dashboard",
  //   rtlTitle: "لوحة القيادة",
  //   icon: "icon-chart-pie-36",
  //   class: ""
  // },
  // {
  //   path: "/covoiturage",
  //   title: "Covoiturage",
  //   rtlTitle: "لوحة القيادة",
  //   icon: "icon-bus-front-12",
  //   class: ""
  // },
  {
    path: "/nouvellevente",
    title: "Nouvelle vente",
    rtlTitle: "لوحة القيادة",
    icon: "icon-cloud-download-93",
    class: "",
    roles: [ERoleModule.ROLE_RH] // add this property to the menu item
  },
  {
    path: "/posts",
    title: "Covoiturage",
    rtlTitle: "لوحة القيادة",
    icon: "icon-bus-front-12",
    class: ""
  },
  // {
  //   path: "/Venteachat",
  //   title: "Vente et Achat",
  //   rtlTitle: "لوحة القيادة",
  //   icon: "tim-icons icon-cart",
  //   class: ""
  // },
  {
    path: "/Vente",
    title: "Vente et Achat ",
    rtlTitle: "لوحة القيادة",
    icon: "tim-icons icon-cart",
    class: ""
  },
  {
    path: "/amicale",
    title: "Activite Amicale",
    rtlTitle: "لوحة القيادة",
    icon: "tim-icons icon-square-pin",
    class: ""
  },
  {
    path: "/bonPlan",
    title: "Bon Plans",
    rtlTitle: "لوحة القيادة",
    icon: "tim-icons icon-heart-2",
    class: ""
  },
  {
    path: "/icons",
    title: "Icons",
    rtlTitle: "الرموز",
    icon: "icon-atom",
    class: ""
  },
  // {
  //   path: "/maps",
  //   title: "Maps",
  //   rtlTitle: "خرائط",
  //   icon: "icon-pin",
  //   class: "" },
  // {
  //   path: "/notifications",
  //   title: "Notifications",
  //   rtlTitle: "إخطارات",
  //   icon: "icon-bell-55",
  //   class: ""
  // },

  {
    path: "/user",
    title: "User Profile",
    rtlTitle: "ملف تعريفي للمستخدم",
    icon: "icon-single-02",
    class: ""
  },
  {
    path: "/tables",
    title: "Table List",
    rtlTitle: "قائمة الجدول",
    icon: "icon-puzzle-10",
    class: ""
  },
  // {
  //   path: "/typography",
  //   title: "Typography",
  //   rtlTitle: "طباعة",
  //   icon: "icon-align-center",
  //   class: ""
  // },
  // {
  //   path: "/rtl",
  //   title: "RTL Support",
  //   rtlTitle: "ار تي ال",
  //   icon: "icon-world",
  //   class: ""
  // }
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor(private userservice: UserService ) {}

  ngOnInit() {
    console.log(ERoleModule.ROLE_RH)
    this.userservice.getUserRoles().subscribe(userRoles => {
      console.log('User Roles:', userRoles);
    });
  
   
    const userRoles$ = this.userservice.getUserRoles();

    combineLatest([userRoles$]).pipe(
      map(([userRoles]) => {
        return ROUTES.filter((menuItem) => {
          if (!menuItem.roles) {
            // If the menu item has no roles specified, show it to everyone
            return true;
          } else if (menuItem.roles.some(role => userRoles.includes(role))) {
            // If the user has the required permission, show the menu item
            return true;
          } else {
            // Otherwise, hide the menu item
            return false;
          }
        });
      })
    ).subscribe(menuItems => {
      this.menuItems = menuItems;
    });
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }


 

}
