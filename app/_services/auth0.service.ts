import {Injectable} from "@angular/core";
import {tokenNotExpired} from "angular2-jwt";
import {AUTH_CONFIG} from "./index";

// We want to avoid any 'name not found'
// warnings from TypeScript
declare var Auth0Lock: any;

@Injectable()
export class Auth0Service {

    lock = new Auth0Lock(AUTH_CONFIG.CLIENT_ID, AUTH_CONFIG.CLIENT_DOMAIN, {
            auth: {
                audience: AUTH_CONFIG.AUDIENCE
            }
        }
    );

    login() {
        this.lock.show((error: string, profile: Object, id_token: string, accessToken: string) => {
            if (error) {
                console.log(error);
            }
            // We get a profile object for the user from Auth0
            localStorage.setItem('profile', JSON.stringify(profile));
            // We also get the user's JWT
            localStorage.setItem('id_token', id_token);
            localStorage.setItem('access_token', accessToken);
           // localStorage.setItem('token_type', tokenType);
        });
    }

    logout() {
        // To log out, we just need to remove
        // the user's profile and token
        localStorage.removeItem('profile');
        localStorage.removeItem('id_token');
    }

    loggedIn(): boolean {
        return tokenNotExpired();
    }
}
