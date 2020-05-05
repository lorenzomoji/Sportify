import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { DeportesComponent } from '../deportes/deportes.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'deportes',
        children: [  
          {
            path: '',
            // loadChildren: () => import('../deportes/deportes.module').then(m => m.DeportesModule)
            children: [
              {
                path: '',
                loadChildren: () => import('../deportes/deportes.module').then(m => m.DeportesModule)
              },
              {
                path: 'deporte-seleccionado',
                children: [
                  {
                    path: '',
                    loadChildren: () => import('../deporte-seleccionado/deporte-seleccionado.module').then(m => m.DeporteSeleccionadoPageModule)
                  },
                  {
                    path: 'buscar-evento',
                    loadChildren: () => import('../buscar-evento/buscar-evento.module').then(m => m.BuscarEventoPageModule)
                  },
                  {
                    path: 'crear-evento',
                    loadChildren: () => import('../crear-evento/crear-evento.module').then(m => m.CrearEventoPageModule)
                  }
                ]
              }
            ]
          },
        ]
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/deportes',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/deportes',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
