import { NgModule } from "@angular/core";
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
    declarations:[ 
        NopagefoundComponent,
        SidebarComponent,
        HeaderComponent,
        BreadcrumbsComponent,
        FooterComponent,
    ],
    exports:[
        NopagefoundComponent,
        SidebarComponent,
        HeaderComponent,
        BreadcrumbsComponent,
        FooterComponent,
    ]
})
export class SharedModule {}