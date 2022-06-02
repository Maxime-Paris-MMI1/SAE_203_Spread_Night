<template>
    <!-- <div class="mt-12 px-5 grid grid-cols-1 lg:grid-cols-2 relative "> -->
        <div>
            <h2 class="my-1 col-span-full text-3xl font-lato text-center">Connection</h2>
            <form class="grid grid-cols-[minmax(5rem,8rem)_minmax(5rem,35rem)] mx-3 gap-1" @submit.prevent="onCnx">

            <fieldset class="contents">
              <label >Email :</label>
              <input type="email" class="rounded-sm border-2 text-black font-montserrat"  v-model="user.email" required>
              <label >Password : </label>
              <input class="rounded-sm border-2 text-black font-montserrat" type="password" v-model="user.password" required/>  
            </fieldset>
            </form>
            <div class="flex justify-center gap-5 mt-10" @submit.prevent="onCnx">
                <button class="font-montserrat py-2 px-3 bg-[#0369A1] rounded-2xl text-white hover:bg-violet-800  hover:-translate-y-0.5" type="submit" @click="onCnx()">Se Connecter</button>
                <button class="font-montserrat py-2 px-3 bg-[#0369A1] rounded-2xl text-white hover:bg-violet-800  hover:-translate-y-0.5" type="button" @click="onDcnx()">Se Déconnecter</button>
            </div>
          <p class="w-full text-center py-3 bg-violet-100 rounded-sm mt-5 text-black font-montserrat">{{message}}</p>
        </div>
        <div>
            <p>Exemple compte admin :</p>
            <p class="pl-5">email : test@gmail.com</p>
            <p class="pl-5">mdp : 123456</p>
            <p>Exemple compte classique :</p>
            <p class="pl-5">email : testnonadmin@gmail.com</p>
            <p class="pl-5">mdp : 123456</p>
        </div>
    <!-- </div> -->
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
            message:'bonjour',
            type:'password'
        }
    },
    mounted(){
        this.message = "User non connecté";
    },
    methods:{
        onCnx(){
            signInWithEmailAndPassword(getAuth(), this.user.email, this.user.password)
            .then((response) =>{
                this.user = response.user;
                console.log("user", this.user);
                emitter.emit('connectUser', {user: this.user});
                this.message = "user connecté : " + this.user.email;
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
    },
}
</script>
 
<style>
 
</style>