<template>
    <main>
        <section>
            <RectanglePresentation
            titre="Programmation"
            couleur="#4C1D95"/>

            <ComposantDate
            couleur="#4C1D95"/>


            <RectanglePresentation
            titre="Samedi 22/10"
            couleur="#4C1D95"/>
        </section>
    </main>
</template>

<script>
import RectanglePresentation from '../components/RectanglePresentation.vue'
import ComposantDate from '../components/ComposantDate.vue'


export default {
    name:"Accueil",
    components:{RectanglePresentation, ComposantDate}

}
</script>