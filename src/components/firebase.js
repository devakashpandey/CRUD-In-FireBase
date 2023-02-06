import { initializeApp } from "firebase/app"

const firebaseConfig = {
 apiKey: "AIzaSyDsTcRc8RD401yWkqq86JKC776F_Hib_u8",
 authDomain: "react-form-675bc.firebaseapp.com",
 databaseURL: "https://react-form-675bc-default-rtdb.firebaseio.com",
 projectId: "react-form-675bc",
 storageBucket: "react-form-675bc.appspot.com",
 messagingSenderId: "473444773969",
 appId: "1:473444773969:web:5ae8218cd700a79bb88870",
};

export const app = initializeApp(firebaseConfig);