import { firebaseConfig } from '@/firebase/config';
import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';
import { getRemoteConfig, RemoteConfig } from 'firebase/remote-config';

// Core SDKs initialization logic that is safe for both client and server.
export function initializeFirebase(): { 
  firebaseApp: FirebaseApp; 
  auth: Auth; 
  firestore: Firestore;
  remoteConfig: RemoteConfig | null;
} {
  let firebaseApp: FirebaseApp;

  if (!getApps().length) {
    try {
      // Attempt to initialize via Firebase App Hosting environment variables (standard in production)
      firebaseApp = initializeApp();
    } catch (e) {
      // Fallback to config object for local development or if auto-init fails
      if (process.env.NODE_ENV === "production") {
        console.warn('Automatic initialization failed. Falling back to firebase config object.', e);
      }
      firebaseApp = initializeApp(firebaseConfig);
    }
  } else {
    firebaseApp = getApp();
  }

  const auth = getAuth(firebaseApp);
  const firestore = getFirestore(firebaseApp);
  
  // Remote Config is only supported in the browser
  let remoteConfig: RemoteConfig | null = null;
  if (typeof window !== 'undefined') {
    remoteConfig = getRemoteConfig(firebaseApp);
  }

  return {
    firebaseApp,
    auth,
    firestore,
    remoteConfig
  };
}

// Note: Re-exporting client hooks here is fine as long as the server-side code 
// only calls initializeFirebase() and doesn't trigger the execution of client-only hook code.
export * from './provider';
export * from './client-provider';
export * from './firestore/use-collection';
export * from './firestore/use-doc';
export * from './remote-config/use-config-value';
export * from './non-blocking-updates';
export * from './non-blocking-login';
export * from './errors';
export * from './error-emitter';
