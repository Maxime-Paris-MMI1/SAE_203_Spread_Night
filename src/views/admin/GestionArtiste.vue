<template>
    <h1 class="font-lato text-2xl text-center border-b-2 mt-10">Gérer l'artiste</h1>
  <div class="mt-12 px-5 flex flex-col gap-20 relative">
      <div class="flex justify-center">
        <RouterLink to="/artisteadmin"> <div class=" bg-violet-700 text-white font-lato px-10 py-4 rounded-2xl hover:bg-violet-900"><p class="effet-shadowblanc">Créer +</p></div> </RouterLink>
      </div>
      <div class="block overflow-x-auto w-full">
            <p class="font-lato text-xl font-medium text-center mb-5">Tapez pour rechercher le nom de l'artiste à modifier</p>
          <div class="flex flex-row justify-center gap-3">
              <input type="search" class="w-full rounded-xl h-10 text-black px-4 bg-violet-50 placeholder:text-violet-900 border-violet-900" placeholder="Recherche par nom" v-model="query">
          </div>

          <table class="w-full">
            <thead>
                <tr class="border-b-2">
                    <th class="w-64 p-3 font-lato ">Image</th>
                    <th class="w-1/5 font-lato ">Nom</th>
                    <th class="w-1/5 font-lato hidden sm:flex mt-3 ">Chanson connue</th>
                
                </tr>
            </thead>
            <tbody>
                <tr v-for="artistes in searchByName" :key="artistes.id" class="mt-2">
                    <td class=""><img :src="artistes.imageartiste" :alt="artistes.artiste" class="w-full h-auto lg:w-1/2 lg:h-1/2  mb-10"></td>
                    <td class="text-center font-lato ">{{artistes.artiste}}</td>
                    <td class="text-center font-lato hidden sm:flex lg:mt-12 sm:mt-[105px] ">{{artistes.chansonconnue}}</td>

                    <td class="text-center lg:w-1/4">
                        

                        <RouterLink :to="{ name:'deleteartiste', params: { id: artistes.id }}">
                         <div class=" p-7 bg-violet-700 text-white font-lato px-4 py-3 rounded-2xl mb-1 effet-shadowblanc hover:bg-violet-900 ">
                            Supprimer
                        </div>
                        </RouterLink>

                        <RouterLink :to="{ name:'modifartiste', params: { id: artistes.id }}">
                            <div class="bg-violet-400 text-white font-lato px-4 py-3 rounded-2xl effet-shadowblanc hover:bg-violet-900">
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
