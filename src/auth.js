
import { db, collection, addDoc, getDocs } from './firebase.js';

export async function registerUser(email, password){
    const usersRef = collection(db, "users");
    await addDoc(usersRef, { email, password });
    alert("Usuario registrado");
}

export async function loginUser(email, password){
    const usersRef = collection(db, "users");
    const snapshot = await getDocs(usersRef);
    let found = false;
    snapshot.forEach(doc=>{
        const data = doc.data();
        if(data.email===email && data.password===password){
            found = true;
        }
    });
    if(found){
        alert("Login correcto");
        window.location.href="panel.html";
    }else{
        alert("Credenciales incorrectas");
    }
}
