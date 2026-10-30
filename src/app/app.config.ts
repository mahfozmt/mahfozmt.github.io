import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    // The router has no pages of its own; the prerenderer needs it to discover the single route.
    provideRouter([]),
    provideClientHydration(withEventReplay()),
  ],
};
