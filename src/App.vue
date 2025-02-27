<template>
  <div ref="divLanguages">
  <Header />
  <main class="overflow-x-hidden" >
    <Hero />
    <div class="bg-[#0f0f0f] md:w-auto w-[29rem]  ">
      <Projects />
      <Skills />
      <Contact />
    </div>
    <Footer />
  </main>
</div>
</template>

<script setup lang="ts">
import { ref, watch, watchEffect } from "vue";
import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
import Hero from "./components/Hero.vue";
import Projects from "./components/Projects.vue";
import Skills from "./components/Skills.vue";

import { useI18n } from 'vue-i18n';

const {locale} = useI18n()

const divLanguages = ref<HTMLElement | null>(null) 

watch(locale,() => {
  if (divLanguages){
    divLanguages.value?.classList.remove('translate')

    setTimeout(() => {

      divLanguages.value?.classList.add('translate')
    },0)
  }
  console.log(locale)
})
</script>


<style scoped>
  .translate{
    animation: toOpacity 1s ease-in-out ;
  }

  @keyframes toOpacity {
    0%{
      opacity: 0;
    }
    100%{
      opacity: 1;
    }
  }

</style>
