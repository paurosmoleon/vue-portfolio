<script setup lang="ts">
import { ref } from 'vue';

    const projects = ref([
    {
    id: 1,
    title: "AI-Powered Analytics",
    image: "../../public/image.jpg",
    description: "A machine learning platform for predictive analytics",
  },
  {
    id: 2,
    title: "Blockchain Marketplace",
    image: "../../public/image.jpg",
    description: "Decentralized marketplace built on Ethereum",
  },
  {
    id: 3,
    title: "IoT Smart Home",
    image: "../../public/image.jpg",
    description: "Connected device ecosystem for modern homes",
  },
    ])

    const currentIndex = ref(0)



    const nextImage = () =>{
        if (currentIndex.value < projects.value.length - 1){
            currentIndex.value++
        }
    }
    const prevImage = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  }
}
</script>


<template>
    <section class="py-20  bg-[#0f0f0f] ">
        <div class="container h-5/6 mx-auto flex flex-col justify-center items-center">
            <h2 class="text-5xl font-bold  text-white pb-10">Featured
                <span class="text-teal-400">Projects</span>
            </h2>
            <button @click="nextImage">anteriror</button>
            <button @click="prevImage">siguiente</button>
            <div class=" text-white">
                
                <div >
                    <img class="w-1/3 rounded-2xl" :src="projects[currentIndex].image" alt="">
                    <div>
                        <h3>{{ projects[currentIndex].title }}</h3>
                        <h3>{{ projects[currentIndex].description }}</h3>
                    </div>
                </div>
            </div>
        </div>
      

    </section>
</template>

