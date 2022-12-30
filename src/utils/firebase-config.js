import {getAuth} from 'firebase/auth'
import {initializeApp} from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyDumYbCgPcw_dFFkD-r2PfyPRHmsYJz_T8",
    authDomain: "movieflix-8bbcd.firebaseapp.com",
    projectId: "movieflix-8bbcd",
    storageBucket: "movieflix-8bbcd.appspot.com",
    messagingSenderId: "208288557873",
    appId: "1:208288557873:web:15658e499cb0b350fdde10",
    measurementId: "G-JKQ8YBF51H"
  };
  
  const app = initializeApp(firebaseConfig);

  export const firebaseAuth = getAuth(app)