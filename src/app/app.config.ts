import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'ring-of-fire-d5acc',
        appId: '1:396100901260:web:28af86253de80f32dc5ea9',
        storageBucket: 'ring-of-fire-d5acc.firebasestorage.app',
        apiKey: 'AIzaSyDY0J7sIfPSGGUGqUjS24pcZ44JmaJU_-I',
        authDomain: 'ring-of-fire-d5acc.firebaseapp.com',
        messagingSenderId: '396100901260',
      })
    ),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()),
  ],
};
