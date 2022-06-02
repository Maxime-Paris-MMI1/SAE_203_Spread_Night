<template>
        <div>
            <form class="w-1/2 mx-auto mt-10 flex flex-col" @submit.prevent="onCreate">
                <fieldset>
                    <div class="grid grid-rows-1 mb-2">
                        <legend class="font-montserrat text-2xl mb-3 border-b-2">Créer un compte</legend>
                        <label class="font-montserrat text-2xl mb-3 mt-2">Login :</label>
                    </div>

                    <div class="grid grid-rows-1">
                        <input type="text" class="rounded-xl border-2 text-black font-montserrat lg:text-lg sm:text-sm pl-2" v-model="user.login" required>
                        <label class="font-montserrat text-2xl mb-3 mt-2">Email :</label>
                    </div>

                    <div class="grid grid-rows-1">
                        <input type="email" class="rounded-xl border-2 text-black font-montserrat lg:text-lg sm:text-sm pl-2" v-model="user.email" required>
                        <label class="font-montserrat text-2xl mb-3 mt-2">Mot de passe : </label>
                    </div>

                    <div class="grid grid-rows-1">
                        <input type="password" class="rounded-xl border-2 text-black font-montserrat lg:text-lg sm:text-sm pl-2" v-model="user.password" required>
                        <label class="font-montserrat text-2xl mb-3 mt-2">Répéter le mot de passe : </label>
                    </div>
                    <div class="grid grid-rows-1">
                        <input class="rounded-xl border-2 text-black font-montserrat lg:text-lg sm:text-sm pl-2 mb-10" type="password" v-model="password2" required>  
                    </div> 
                </fieldset>
                                    <button class="font-montserrat py-2 px-3 bg-[#0369A1] rounded-2xl text-white hover:bg-violet-800  hover:-translate-y-0.5 mb-20 mt-2" type="submit" >Créer</button> 
            </form>
            <p class="w-full text-center py-3 bg-violet-100 rounded-sm mt-5 text-black font-montserrat">{{message}}</p>
           
        </div>
</template>

<script>
import {emitter} from '../main.js'
import {
    getFirestore,   // Obtenir le Firestore
    collection,     // Utiliser une collection de documents
    doc,            // Obtenir un document par son id
    getDocs,        // Obtenir la liste des documents d'une collection
    getDoc,
    addDoc,         // Ajouter un document à une collection
    updateDoc,      // Mettre à jour un document dans une collection
    deleteDoc,      // Supprimer un document d'une collection
    onSnapshot,     // Demander une liste de documents d'une collection, en les synchronisant
    query,          // Permet d'effectuer des requêtes sur Firestore
    orderBy         // Permet de demander le tri d'une requête query
    } from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js'
import {
    getAuth,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    createUserWithEmailAndPassword
} from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js'
export default {
    data(){
        return{
            user:{
                login:'',
                email:'',
                password:'',
            },
            password2:'',
            message:'hello',
            type:'password'
        }
    },
    mounted(){
        this.message = "Vous n'avez pas encore crée de compte";
    },
    methods:{
        onCnx(){
            signInWithEmailAndPassword(getAuth(), this.user.email, this.user.password)
            .then((response) =>{
                this.user = response.user;
                console.log("user", this.user);
                emitter.emit('connectUser', {user: this.user});
                this.message = "votre compte a bien été crée à l'addresse suivante : " + this.user.email;
            })
            .catch((error)=>{
                console.log('erreur connexion', error);
                this.message = "erreur d'authentification";
            })
        },
        onDcnx(){
            signOut(getAuth())
            .then(response =>{
                this.message = "User non connecté";
                this.user = {
                    email:null,
                    password:null
                };
               emitter.emit('deConnectUser', {user:this.user});
            })
            .catch(error=>{
                console.log('erreur deconnexion', error);
            })
        },
        onCreate(){
            if(this.user.password===this.password2){
                createUserWithEmailAndPassword(getAuth(), this.user.email, this.user.password)
                    .then((response) => {
                        // Signed in
                        const user = response.user;
                    })
                    .catch((error) => {
                        console.log('erreur création', error);
                        this.message = "erreur de création";
                })
               
                this.onCnx();
                onAuthStateChanged(getAuth(), (user) => {
                if (user) {
                    const uid = user.uid;
                    const firestore = getFirestore();
                    const dbUser = collection(firestore, "users");
                    const docRef = addDoc(dbUser,{
                        uid: uid,
                        admin: false,
                        login: this.user.login
                })
                console.log('document créé avec le id : ', docRef.id);
                } else {
                    console.log("user pas connecté")
                }
                });
               
            }else{
                this.message = "mot de passe pas cohérent"
                console.log('mauvais mot de passe')
            }
        },
    },
}
</script>
 
<style>
 
</style>