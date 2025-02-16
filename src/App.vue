<template>
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
</template>

<script setup lang="ts">
import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
import Hero from "./components/Hero.vue";
import Projects from "./components/Projects.vue";
import Skills from "./components/Skills.vue";



</script>


<style scoped></style>
