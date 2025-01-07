import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { environment } from '../environments/environment';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, Inject } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideHttpClient( withFetch()),

    { provide: "baseUrl", useValue: environment.firebase.authDomain, multi: true },
    {
      provide: 'initializeFirebaseAnalytics',
      useFactory: (platformId: object) => {
        if (isPlatformBrowser(platformId)) {

          const app = initializeApp(environment.firebase);
          const analytics = getAnalytics(app);
          console.log('Firebase Analytics initialized in browser:', analytics);
        }
      },
      deps: [PLATFORM_ID]
    }, provideAnimationsAsync()
  ]
};
