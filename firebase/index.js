import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import 'firebase/storage';




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
const db = firebase.firestore();

const mapUserFromFirebaseAuth = (user) => {
	const { email, displayName, photoURL, uid } = user;
	return { email, displayName, photoURL, uid };
};

//Cuando el estado del usuario cambia
export const onAuthStateChanged = (setUser) => {
	return firebase.auth().onAuthStateChanged((user) => {
		const finalUser = user ? mapUserFromFirebaseAuth(user) : null;
		setUser(finalUser);
	});
};

//UpdateProfile
export const updateName = async (name) => {
	const user = auth.currentUser;
	const uid = user.uid;
	const all = await db.collection('Usuarios');
	const snapshot = await db.collection('Usuarios').where('uid', '==', uid).get()
	snapshot.forEach(doc => {
		all.doc(doc.id).update({ userName: name })
	});
}

export const updateDesc = async (description) => {
	const user = auth.currentUser;
	const uid = user.uid;
	const all = await db.collection('Usuarios');
	const snapshot = await db.collection('Usuarios').where('uid', '==', uid).get()
	snapshot.forEach(doc => {
		all.doc(doc.id).update({ desc: description })
	});
}

export const updateImg = async (image) => {
	const user = auth.currentUser;
	const uid = user.uid;
	const all = await db.collection('Usuarios');
	const snapshot = await db.collection('Usuarios').where('uid', '==', uid).get()
	snapshot.forEach(doc => {
		all.doc(doc.id).update({ img: image })
	});
}

export const uploadImage = (file) => {
	const ref = firebase.storage().ref(`images/${file.name}`)
	const task = ref.put(file)
	return task
}

export const createUser = (userName, surName, desc, img) => {
	const user = auth.currentUser;
	const uid = user.uid;
	db.collection('Usuarios').add({
		uid: uid,
		userName: userName,
		surName: surName,
		img: img,
		desc: desc
	})
}



export const getCurrentUser = async (uid) => {
	const snapshot = await db.collection('Usuarios').where('uid', '==', uid).get();
	if (snapshot.empty) {
		throw ("user not register")
	}
	let array = [];
	snapshot.forEach(doc => {
		array.push(doc.data());

	});

	return array[0];
}
//Auth con Mail y Contraseña
export const signinWithMail = (email, password) => {
	return auth.createUserWithEmailAndPassword(email, password);
	/*return auth.currentUser.updateProfile({
		displayName: userName,
	});*/
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
