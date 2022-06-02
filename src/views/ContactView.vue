<template>
    <p class="font-montserrat font-normal text-base text-center lg:mb-[70px] mt-14 mb-10">
        Pour toutes questions éventuelles n’hésitez pas à nous contacter en remplisant ce formulaire 
        vous pouvez également voir le lieu du festival grâce à la carte ci-dessous
    </p>
      <div class=" flex justify-center p-4">
        <div class="box-border rounded-[21px] bg-violet-900 p-8  w-11/12 max-w-[744px] shadow-lg ">
          <form method="post"  class=" font-montserrat font-medium" id="form">

            <label for="sujet" class="ml-0 mr-0 w-full font-montserrat font-medium text-lg text-white">Prénom</label>
            <input type="text" id="sujet" name="prenom" placeholder="Votre prénom" class="w-full p-3 border border-b-vert-moyen-deco  box-border mt-1.5 mb-4 mr-0 ml-0 resize-y font-montserrat font-light text-xs rounded-lg bg-violet-100">


            <label for="fname" class="ml-0 mr-0 w-full font-montserrat font-medium text-lg text-white">Nom </label>
            <input type="text" id="fname" name="name" placeholder="Votre nom" class="w-full p-3 border border-b-vert-moyen-deco  box-border mt-1.5 mb-4 mr-0 ml-0 resize-y font-montserrat font-light text-xs rounded-lg bg-violet-100">
        
        
            <label for="emailAddress" class="ml-0 mr-0 w-full font-montserrat font-medium text-lg text-white">Email</label>
            <input id="emailAddress" type="email" name="email" placeholder="Votre email" required class="w-full p-3 border border-b-vert-moyen-deco  box-border mt-1.5 mb-4 mr-0 ml-0 resize-y font-montserrat font-light text-xs rounded-lg bg-violet-100">
        
        
            <label for="subject" class="ml-0 mr-0 w-full font-montserrat font-medium text-lg text-white ">Message</label>
            <textarea id="subject" name="message" placeholder="Votre message" style="height:150px" class="w-full p-3 border border-b-vert-moyen-deco  box-border mt-1.5 mb-4 mr-0 ml-0 resize-y font-montserrat font-light text-xs rounded-lg bg-violet-100"></textarea>
            <input class="mb-7" type="checkbox" required> 
            <span class="font-montserrat font-normal text-[14px] text-white "> J’accepte les conditions d’utilisations </span>
            <div class=" text-center">
            <input type="submit" value="Envoyer" name="submit" class=" bg-violet-600 text-white px-16 py-3 rounded-3xl border-none cursor-pointer shadow-lg text-lg font-montserrat font-medium hover:bg-[#0369A1] w-11/12">
            </div>
          </form>
        </div>
      </div>

      <div >
        <iframe class="w-full object-cover" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d81403.38137083247!2d6.841486169009612!3d45.90706401679912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47894ec98e061181%3A0x7753a53db26fea54!2sAiguille%20du%20Gr%C3%A9pon!5e0!3m2!1sfr!2sfr!4v1654087135642!5m2!1sfr!2sfr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
</template>

<script>

export default {
  name: "Accueil",
  components: {},
}
</script>
