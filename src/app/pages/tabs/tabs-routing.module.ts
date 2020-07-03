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
        path: 'lista-eventos',
        loadChildren: () => import('../lista-eventos/lista-eventos.module').then(m => m.ListaEventosPageModule)
      },
      {
        path: 'perfil',
        loadChildren: () => import('../perfil/perfil.module').then(m => m.PerfilPageModule)
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
