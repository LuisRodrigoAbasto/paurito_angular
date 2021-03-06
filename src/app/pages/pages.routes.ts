import { RouterModule, Routes } from "@angular/router";
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GraficasComponent } from './graficas/graficas.component';



const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'graficas', component: GraficasComponent },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
        ]
    },
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);