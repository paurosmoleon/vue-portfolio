<script setup lang="ts">
import { ref } from 'vue';

const projects = ref([
  {
    id: 1,
    title: "AI-Powered Analytics",
    image: "../../public/image.jpg",
    description: "A machine learning platform for predictive analytics",
    techs: ["React","Typescript","Supabase"]
  },
  {
    id: 2,
    title: "Blockchain Marketplace",
    image: "../../public/image.jpg",
    description: "Decentralized marketplace built on Ethereum",
    techs: ["Go"]
  },
  {
    id: 3,
    title: "IoT Smart Home",
    image: "../../public/image.jpg",
    description: "Connected device ecosystem for modern homes",
    techs: ["etc","etc","etc"]
  },
])

const currentIndex = ref(0)


</script>


<template>
  <section class="py-20  bg-[#0f0f0f] ">
    <div class="container h-5/6 mx-auto flex flex-col justify-center items-center">
      <h2 class="text-5xl font-bold  text-white pb-10">Featured
        <span class="text-teal-400">Projects</span>
      </h2>
      <div class="flex flex-row items-center">
      <button class="w-10 h-10 text-lg bg-gray-800 text-white rounded-full" @click="currentIndex--" ><</button>
      <div class="text-white">
        <div class="flex justify-around items-center">
          <img class="w-1/3 rounded-2xl" :src="projects[currentIndex].image" alt="">
          <div class=" flex flex-col gap-10  ">
            <h3 class="font-bold text-center text-3xl">{{ projects[currentIndex].title }}</h3>
            <p>{{ projects[currentIndex].description }}</p>
            <ul class="h-10 flex justify-evenly">
              <li class="bg-cyan-700 bg-opacity-30  rounded-full text-teal-300 font-semibold py-2 px-3"  v-for="tech in projects[currentIndex].techs">
                {{ tech }}
              </li>
            </ul>
            <button class=" w-1/2  bg-teal-400 text-black font-bold py-3 px-8 rounded-lg hover:bg-opacity-80 transition duration-300">View Project</button>
          </div>
          
        </div>
        <div  class="flex flex-row items-center justify-center pt-6 gap-4">
            <div :class="['w-4 h-4  rounded-full transition-all duration-500', currentIndex === projectCurrent.id - 1 ? 'bg-teal-400 scale-125':'bg-gray-500']" v-for="projectCurrent in projects" :key="projectCurrent.id"></div>
          
          </div>
      </div>
      <button class="w-10 h-10 text-lg bg-gray-800 text-white rounded-full" @click="currentIndex++">></button>
    </div>
    </div>


  </section>
</template>
