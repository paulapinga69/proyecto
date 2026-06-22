
import { db } from './firebase.js';
import { collection, addDoc, getDocs, query, where } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-firestore.js";

function sanitizar(valor){
  return valor.replace(/[^a-zA-Z0-9@._-]/g,'');
}

async function hashSHA256(texto){
 const data=new TextEncoder().encode(texto);
 const hash=await crypto.subtle.digest('SHA-256',data);
 return [...new Uint8Array(hash)].map(b=>b.toString(16).padStart(2,'0')).join('');
}

export async function registerUser(usuario,password){
 usuario=sanitizar(usuario);
 const q=query(collection(db,"users"),where("usuario","==",usuario));
 const existe=await getDocs(q);
 if(!existe.empty) throw new Error("Usuario ya existe");

 const passwordHash=await hashSHA256(password);
 await addDoc(collection(db,"users"),{usuario,passwordHash});
}

export async function loginUser(usuario,password){
 usuario=sanitizar(usuario);
 const passwordHash=await hashSHA256(password);
 const q=query(collection(db,"users"),where("usuario","==",usuario));
 const res=await getDocs(q);
 let ok=false;
 res.forEach(d=>{ if(d.data().passwordHash===passwordHash) ok=true; });
 return ok;
}
