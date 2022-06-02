<template>
        <div>
            <h2 class="my-1 col-span-full text-3xl font-lato text-center mt-3">Connexion</h2>



                <form @submit.prevent="onCnx">
                <fieldset class="w-1/4 mx-auto mt-10 flex flex-col gap-8">
                    <div class="grid grid-rows-1">
                        <label class="font-montserrat text-2xl mb-3">Email :</label>
                        <input type="email" class="rounded-xl border-2 text-black font-montserrat lg:text-lg sm:text-sm pl-2"  v-model="user.email" required>
                    </div>
                    <div class="grid grid-rows-1 mb-2">
                        <label class="font-montserrat text-2xl mb-3">Password : </label>
                        <input class="rounded-xl border-2 text-black font-montserrat lg:text-lg sm:text-sm pl-2" type="password" v-model="user.password" required/>  
                    </div>
                </fieldset>
                </form>
                <div class="flex flex-row justify-center gap-2 text-xs sm:text-sm lg:text-lg font-montserrat font-medium mt-5">
                    <p>Pas encore inscrit ?</p>
                    <RouterLink class="text-violet-900 font-semibold" to="/inscription">S'inscrire</RouterLink>
                </div>
            <div class="flex justify-center gap-5 mt-10 mb-20" @submit.prevent="onCnx">
                <button class="font-montserrat py-2 px-3 bg-[#0369A1] rounded-2xl text-white hover:bg-violet-800  hover:-translate-y-0.5" type="submit" @click="onCnx()">Se Connecter</button>
                <button class="font-montserrat py-2 px-3 bg-[#0369A1] rounded-2xl text-white hover:bg-violet-800  hover:-translate-y-0.5" type="button" @click="onDcnx()">Se Déconnecter</button>
            </div>
        </div>


<div>


</div>


        <div class="font-montserrat flex flex-row justify-center gap-5 lg:gap-10 mt-12 mb-20 mx-3">

            <div class="flex flex-col flex-wrap text-xs sm:text-sm lg:text-xl">
                <p>compte admin :</p>
                <p>- email : test@gmail.com</p>
                <p>- mdp : ******</p>
            </div>
            <div class="flex flex-col flex-wrap text-xs sm:text-sm lg:text-xl">
                <p>compte classique :</p>
                <p>- email : testnonadmin@gmail.com</p>
                <p>- mdp : ******</p>
            </div>
        </div>
        <p class="w-full text-center py-3 bg-violet-100 rounded-sm mt-5 text-black font-montserrat">{{message}}</p>
</template>
 
<script>

import MenuDown from '../components/MenuDown.vue'
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
            type:'password',
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