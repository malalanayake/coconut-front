interface AuthConfig {
    CLIENT_ID: string;
    CLIENT_DOMAIN: string;
    AUDIENCE: string;
    REDIRECT: string;
    SCOPE: string;
}

export const AUTH_CONFIG: AuthConfig = {
    CLIENT_ID: 'GfH0z3pgN7DjZv3HTwMroQyUKPVedvVp',
    CLIENT_DOMAIN: 'sit.auth0.com',
    AUDIENCE: 'spring-boot-jwts',
    REDIRECT: 'http://localhost:3000/callback',
    SCOPE: 'openid email'
};