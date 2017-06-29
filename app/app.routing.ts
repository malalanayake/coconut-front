import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./home/index";
import {LoginComponent} from "./login/index";
import {RegisterComponent} from "./register/index";
import {AuthGuard} from "./common/services/index";
import {Auth0Component} from "./common/auth0_login/index";


const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'auth',
        component: Auth0Component
    },
    {
        path: 'register',
        component: RegisterComponent
    },

    // otherwise redirect to home
    {
        path: '**',
        redirectTo: ''
    }
];

export const routing = RouterModule.forRoot(appRoutes);