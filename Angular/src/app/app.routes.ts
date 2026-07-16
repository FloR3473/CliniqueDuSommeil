import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { Login } from './login/login';
import { Accueil } from './accueil/accueil';
import { ResultatsNuits } from './resultats_nuits/resultats_nuits';
import { Layout } from './layout/layout';
import { Patients } from './patients/patients';

export const routes: Routes = [
    { path: '', component: Accueil },
    { path: 'login', component: Login },
    {
        path: 'layout',
        component: Layout,
        children: [
            {
                path: 'dashboard',
                component: Dashboard
            },
            {
                path: 'resultats-nuits',
                component: ResultatsNuits
            },
            {
                path: 'patients',
                component: Patients
            },

            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            }
        ]
    }
];
