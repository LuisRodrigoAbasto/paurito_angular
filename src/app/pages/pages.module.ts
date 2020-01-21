import { NgModule } from "@angular/core";
import { SharedModule } from '../shared/shared.module';

import { FormsModule } from '@angular/forms';
import { PAGES_ROUTES } from './pages.routes';

// ng2 - chartjs
import { ChartsModule } from 'ng2-charts';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GraficasComponent } from './graficas/graficas.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';




@NgModule({
    declarations:[
        PagesComponent,
        DashboardComponent,
        GraficasComponent,
        GraficoDonaComponent,
    ],
    exports:[
        DashboardComponent,
        GraficasComponent,
    ],
    imports:[
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule
    ]
})
export class PagesModule{}