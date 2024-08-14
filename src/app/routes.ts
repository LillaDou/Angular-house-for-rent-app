import { Routes } from "@angular/router";
import { DetailsComponent } from "./details/details.component";
import { HomeComponent } from "./home/home.component";

//Representa las rutas de la aplicación
const routeConfig: Routes = [
    //En este primero, cuando el url es igual al path, nos lleva al HomeComponent
    {
        path: '',
        component: HomeComponent,
        title: 'Home page',
    },
    {
        path: 'details/:id',//El :id es dinámico
        component: DetailsComponent,
        title: 'Home details',
    },
];
export default routeConfig;

