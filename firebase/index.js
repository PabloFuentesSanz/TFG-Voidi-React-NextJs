import firebase from "firebase/app";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyDMZoqQjr6cJbwlx0Ly5L8kI67KL4QInOw",
	authDomain: "voidi-83875.firebaseapp.com",
	projectId: "voidi-83875",
	storageBucket: "voidi-83875.appspot.com",
	messagingSenderId: "408259795882",
	appId: "1:408259795882:web:0062f8efb56fd9a0a429d3",
	measurementId: "G-TRTCXB7BST",
};

//Inicializar firebase si no hay otra inicializada antes
//(Esto se debe a que firebase no se actualiza al guardar)
!firebase.apps.length && firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

const mapUserFromFirebaseAuth = (user) => {
	const { email, displayName, photoURL, uid } = user;
	return { email, displayName, photoURL, uid };
};

//Cuando el estado del usuario cambia
export const onAuthStateChanged = (setUser) => {
	return firebase.auth().onAuthStateChanged((user) => {
		console.log(user)
		const finalUser = user ? mapUserFromFirebaseAuth(user) : null;
		setUser(finalUser);
	});
};

//UpdateProfile
export const updateName = (userName) =>{
	auth.currentUser.updateProfile({
		displayName: userName
	  }).then(function() {
		// Update successful.
	  }).catch(function(error) {
		// An error happened.
	  });
}

//Auth con Mail y Contraseña
export const signinWithMail = async (userName, email, password) => {
	await auth.createUserWithEmailAndPassword(email, password);
	return auth.currentUser.updateProfile({
		displayName: userName,
	});
};

export const loginWithMail = (email, password) => {
	return auth.signInWithEmailAndPassword(email, password);
};

export const logout = () => {
	return auth.signOut();
};

//Auth con Google

export const loginWithGoogle = () => {
	const googleProvider = new firebase.auth.GoogleAuthProvider();
	return auth.signInWithPopup(googleProvider);
};

//Auth con Facebook
