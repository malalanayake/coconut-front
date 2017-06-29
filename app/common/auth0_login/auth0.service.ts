import {Injectable} from "@angular/core";
import {tokenNotExpired} from "angular2-jwt";
import {AUTH_CONFIG} from "./index";

declare var Auth0Lock: any;

@Injectable()
export class Auth0Service {

    lock = new Auth0Lock(AUTH_CONFIG.CLIENT_ID, AUTH_CONFIG.CLIENT_DOMAIN, {
        autoClose: true,
        scope: AUTH_CONFIG.SCOPE,
        /* Any other params */
        auth: {
            params: {
                audience: AUTH_CONFIG.AUDIENCE,
            }
        }
    });

    constructor() {
        this.lock.on("authenticated", function (authResult) {
            localStorage.setItem('id_token', authResult.idToken);
            localStorage.setItem('access_token', authResult.accessToken);

            this.getUserInfo(authResult.accessToken, function (error, profile) {
                if (error) {
                    console.log(error);
                    return;
                }

                localStorage.setItem('profile', JSON.stringify(profile));
            });
        });
    }

    login() {
        this.lock.show();
    }

    logout() {
        localStorage.removeItem('profile');
        localStorage.removeItem('id_token');
        localStorage.removeItem('access_token');
    }

    loggedIn(): boolean {
        return tokenNotExpired();
    }
}
