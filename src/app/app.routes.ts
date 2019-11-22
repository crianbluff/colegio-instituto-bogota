import { Routes, RouterModule } from '@angular/router';
import { CircualesAdminComponent } from './components/circulares-admin/circulares-admin.component';
import { CargaComponent } from './components/carga/carga.component';
import { CircularesComponent } from './components/circulares/circulares.component';

const RUTAS:Routes = [
  {
    path: 'circulares-admin',
    component: CircualesAdminComponent
  },

  {
    path: 'carga',
    component: CargaComponent
  },

  {
    path: 'circulares',
    component: CircularesComponent
  },

  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'circulares'
  }
];

export const APP_ROUTES = RouterModule.forRoot(RUTAS,
  {
    useHash: true,
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
  }
);