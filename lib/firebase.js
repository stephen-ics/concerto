import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
/*
const app = getApps().length === 0 ? initializeApp({ 
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
}) : getApp();
*/

// App initalization
const app =
	getApps().length === 0
		? initializeApp({
				apiKey: 'AIzaSyCUBSS9HRHlGVloHbw7fMq9P3EEm2uP9_E',
				authDomain: 'concerto-2338e.firebaseapp.com',
				projectId: 'concerto-2338e',
				storageBucket: 'concerto-2338e.appspot.com',
				messagingSenderId: '826967319114',
				appId: '1:826967319114:web:b3fd2756648898bf5e7cb3',
				measurementId: 'G-W17JP4ZPLB',
		  })
		: getApp();

// Microservices
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export default app;
export { auth, firestore, storage };
