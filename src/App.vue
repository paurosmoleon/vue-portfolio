
<template >
  <Header/>
  <main >
    <Hero/>
    <div class="bg-[#0f0f0f]">      
      <Projects/>
      <Skills/>
    </div>
  </main>
</template>

<script setup lang="ts">
  import Header from "./components/Header.vue";
  import Hero from "./components/Hero.vue";
  import Projects from "./components/Projects.vue";
  import Skills from "./components/Skills.vue";
</script>


<style scoped>

</style>
