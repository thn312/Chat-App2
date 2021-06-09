import './App.css';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import {useCollectionData} from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyBOo634-mMTO9vx9kHNqN7NQyn-rXUZIyo",
  authDomain: "chatapp-c251e.firebaseapp.com",
  projectId: "chatapp-c251e",
  storageBucket: "chatapp-c251e.appspot.com",
  messagingSenderId: "722771728868",
  appId: "1:722771728868:web:d4eaa02c6c10de4d9f8ff1",
  measurementId: "G-25T1RT6KZH"
})

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
      </header>
      <section>
        {user ? <ChatRoom/> : <SignIn/>}
      </section>
    </div>
  );
}

function SignIn(){
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <button onClick={signInWithGoogle}>Sign in with Google</button>
  )
}


function SignOut(){
  return;
}

function ChatRoom(){

}

export default App;
