import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HttpModule, BaseRequestOptions} from "@angular/http";
import {AUTH_PROVIDERS} from "angular2-jwt";
// used to create fake backend
import {fakeBackendProvider} from "./_helpers/index";
import {MockBackend} from "@angular/http/testing";
import {AppComponent} from "./app.component";
import {routing, routedComponents} from "./app.routing";
import {AlertComponent} from "./_directives/index";
import {AuthGuard} from "./_guards/index";
import {AlertService, AuthenticationService, UserService} from "./_services/index";
import {HomeComponent} from "./home/index";
import {LoginComponent} from "./login/index";
import {RegisterComponent} from "./register/index";
import {Auth0Component} from "./auth0_login/auth0_login.component";
import {Auth0Service} from "./_services/auth0.service";


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        Auth0Component,
        RegisterComponent
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        Auth0Service,
        AUTH_PROVIDERS,
        UserService,

        // providers used to create fake backend
        fakeBackendProvider,
        MockBackend,
        BaseRequestOptions
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}