
import { RouterModule, Routes} from '@angular/router';
import { ListadoComponent } from './pages/listado/listado.component';
import { HomeComponent } from './pages/home/home.component';
import { FormularioComponent } from './pages/formulario/formulario.component';


const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'listado', component: ListadoComponent },
    { path: 'formulario', component: FormularioComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});