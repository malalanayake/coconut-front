import { Route } from '@angular/router';
import {HomeComponent} from "../../home/home.component";
import {AuthGuard} from "../services/auth.guard";

export const MODULE_ROUTES: Route[] = [
    { path: 'home', component: HomeComponent, canActivate:[AuthGuard] }
]