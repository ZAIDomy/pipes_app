import { ApplicationConfig, LOCALE_ID, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

import localeEs from '@angular/common/locales/es';
import localeFr from '@angular/common/locales/fr';

import { registerLocaleData } from '@angular/common';
import { LocaleService } from './services/local.service';

registerLocaleData(localeEs,'es');
registerLocaleData(localeFr,'fr');

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
  provideRouter(routes),
  {
    provide: LOCALE_ID,
    deps:[LocaleService],
    useFactory: (LocaleService: LocaleService) => LocaleService.getLocale,
  },
  ],
};
