import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { SalasComponent } from './pages/salas/salas.component';
import { FormCriarSalaComponent } from './componentes/form-criar-sala/form-criar-sala.component';
import { FormEditarSalaComponent } from './componentes/form-editar-sala/form-editar-sala.component';

const routes: Route[] = [
    {
        path: '',
        component: SalasComponent
    },
    {
        path: 'salas',
        component: SalasComponent
    },
    {
        path: 'salas/novo',
        component: FormCriarSalaComponent
    },
    {
        path: 'salas/:id/editar',
        component: FormEditarSalaComponent
    }
]


@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRouteModule { }