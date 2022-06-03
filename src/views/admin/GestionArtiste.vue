<template>
  <div class="mt-12 px-5 flex flex-col gap-20 relative">
      <div class="flex justify-between items-end">
        <h1 class="text-4xl underline font-lato">Liste artiste</h1>
        <RouterLink to="/create"> <div class=" bg-red-700 text-white font-lato px-10 py-4 rounded-2xl hover:bg-red-600"><p class="effet-shadowblanc">Créer +</p></div> </RouterLink>
      </div>
      <div class="block overflow-x-auto w-full">
         
          <div class="relative float-right w-1/3">
           <p class="  font-lato ">Taper pour rechercher</p>
              <input type="search" class="w-full rounded-xl h-10 text-black px-4 bg-slate-200" placeholder="Recherche par nom" v-model="query">
           
          </div>

          <table class="w-full">
            <thead>
                <tr class="border-b-2">
                    <th class="w-64 p-3 font-lato ">Image</th>
                    <th class="w-1/5 font-lato ">Nom</th>
                    <th class="w-1/5 font-lato ">Chanson connue</th>
                    

                </tr>
            </thead>
            <tbody>
                <tr v-for="artistes in searchByName" :key="artistes.id" class="mt-2">
                    <td class=""><img :src="artistes.imageartiste" :alt="artistes.artiste" class="w-full h-auto"></td>
                    <td class="text-center font-lato ">{{artistes.artiste}}</td>

                    <td class="text-center ">
                        


                        <RouterLink :to="{ name:'deleteartiste', params: { id: artistes.id }}">
                         <div class=" p-7 bg-red-900 text-white font-lato px-4 py-3 rounded-2xl mb-8 effet-shadowblanc ">
                    Supprimer
                        </div>
                        </RouterLink>



                    <RouterLink :to="{ name:'modifartiste', params: { id: artistes.id }}">
                        <div class="bg-red-600 text-white font-lato px-4 py-3 rounded-2xl effet-shadowblanc">
                    Modifier


                    </div>
                    </RouterLink>


                    </td>
                </tr>
            </tbody>
        </table>
      </div>
  </div>
</template>

<script>
import {
    getFirestore,
    collection,
    doc,
    query,
    orderBy,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    onSnapshot } from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js'
import { 
    getStorage,             // Obtenir le Cloud Storage
    ref,                    // Pour créer une référence à un fichier à uploader
    getDownloadURL,         // Permet de récupérer l'adress complète d'un fichier du Storage
    uploadString,           // Permet d'uploader sur le Cloud Storage une image en Base64
} from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-storage.js'


export default {
   
    data(){
        return{
            listArt:[],
            query:'',
            
        }
    },
    mounted(){
      this.getArtiste();
    },
    methods:{
      async getArtiste(){
        const firestore = getFirestore();
          const dbArt = collection(firestore, "artistes");
          const q = query(dbArt, orderBy('artiste', 'asc'));
          await onSnapshot(q, (snapshot) =>{
              this.listArt = snapshot.docs.map(doc =>({
                  id:doc.id, ...doc.data()
              }))
          this.listArt.forEach(function(artistes){
              const storage = getStorage();
              const spaceRef = ref(storage, 'imageartiste/'+artistes.imageartiste);
              getDownloadURL(spaceRef)
              .then((url) =>{
                  artistes.imageartiste = url;
              })
              .catch((error) =>{
                  console.log('erreur download url', error);
              })
          })
          
          })
      },
    },
    computed:{
        searchByName(){
            let query = this.query;
                return this.listArt.filter(function(artistes){
                    return artistes.artiste.includes(query);
            })    
        },

    }
}
</script>
