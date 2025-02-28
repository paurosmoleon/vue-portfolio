<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const {t} = useI18n()


const projects = ref([
  {
    id: 1,
    title: "Proyecto de halloween",
    image: "/projects/hallowen.png",
    description: "Proyecto de clase sobre una pagina con la temática de halloween",
    techs: ["HTML","CSS","JS","PHP"],
    url: "https://github.com/paurosmoleon/proyecto-de-halloween.git"
  },
  {
    id: 2,
    title: "RPG",
    image: "/projects/rpg-ts.png",
    description: "Proyecto de clase sobre un rpg hecho en Typescript",
    techs: ["Typescript","HTML","CSS"],
    url: "https://github.com/paurosmoleon/RPG-TS.git"
  },
  {
    id: 3,
    title: "Portfolio",
    image: "/projects/portfolio.png",
    description: "Portfolio hecho en VUE  y Tailwind",
    techs: ["Vue","Tailwind","Typescript"],
    url: "https://github.com/paurosmoleon/vue-portfolio.git"
  },
])



const currentIndex = ref(0)

const nextProject = () => {
  if(currentIndex.value < projects.value.length -1){
    currentIndex.value++
  } else {
    currentIndex.value = 0
  }
}
const lastProject = () => {
  if(currentIndex.value > 0){
    currentIndex.value--
  } else {
    currentIndex.value = projects.value.length
  }
}

const icons: Record<string,string> = {
  //Iconos front
  'Tailwind': '/techs/tailwind.svg',
  'Vue':'/techs/vue.svg',
  'React':'/techs/react.svg',
  'Typescript':'/techs/typescript.svg',
  'HTML':'/techs/html.svg',
  'CSS':'/techs/css.svg',
  'JS':'/techs/js.svg',
  //Iconos Back
  'Node.js':'/techs/nodejs.svg',
  'Python':'/techs/python.svg',
  'Golang':'/techs/golang.svg',
  'PHP':'/techs/php.svg',
  //Icons DB
  'PostgreSQL': '/techs/postgreSQL.svg',
  'Supabase': '/techs/supabase.svg',
  'Turso':'/techs/turso.svg',
  //Icons DevOps
  'Git': '/techs/git.svg',
  'Docker': '/techs/docker.svg'
}


</script>


<template>
  <section id="Projects" class="py-20 md:w-auto w-screen m-auto  text-center ">
    <div  class="container h-5/6 mx-auto flex flex-col justify-center items-center  ">
      <h2 class="text-5xl font-bold  text-white pb-10">{{ $t('projectTitle1')}}
        <span class="text-teal-400">{{ $t('projectTitle2')}}</span>
      </h2>
      <div class="w-screen flex flex-row md:justify-around   items-center">
      <button class="w-10 h-10 md:block hidden text-lg bg-gray-800 text-white rounded-full transition-all duration-500" @click="lastProject()" ><</button>
      <div class="text-white md:max-w-7xl " >
        <div class="w-full  h-auto flex md:flex-row gap-20 flex-col justify-around items-center  opacityProject " v-for="project in projects" v-show="project === projects[currentIndex]">
          <img class="w-1/3 md:max-h-52  rounded-2xl " :src="projects[currentIndex].image" alt="">
          <div class=" flex flex-col  gap-10 w-full">
            <h3 class="font-bold text-center md:pt-0 pt-5 text-3xl">{{ project.title }}</h3>
            <p class="text-pretty w-full">{{ project.description }}</p>
            <ul class="h-auto ">
              <div class="grid grid-cols-3 gap-6 w-full">
                <li class="w-full flex flex-row justify-evenly bg-gray-800 bg-opacity-70  rounded-full text-sky-400 font-semibold   border border-sky-400 py-3 px-5"  v-for="tech in project.techs">
                  <img :src="icons[tech]" alt="tech" class="w-5 h-5">
                  {{ tech }}
                </li>
              </div>
            </ul>
            <button class=" w-32 h-8 mx-auto bg-cyan-400 text-black font-bold  text-center rounded-md hover:bg-opacity-80 transition duration-300 text-base "><a :href="project.url" target="_blank">View Project</a></button>
          </div>
          
        </div>
        
        <div  class="flex flex-row items-center justify-center pt-6 gap-4">
          
            <button class="w-10 h-10 md:hidden block text-lg bg-gray-800 text-white rounded-full transition-all duration-500" @click="lastProject()" ><</button>
            
            <div :class="['w-4 h-4  rounded-full transition-all duration-500', currentIndex === projectCurrent.id - 1 ? 'bg-teal-400 scale-125':'bg-gray-500']" v-for="projectCurrent in projects" :key="projectCurrent.id"></div>
            <button class="w-10 h-10 text-lg bg-gray-800 md:hidden block text-white rounded-full" @click="nextProject()">></button>
    
          </div>
      </div>
      <button class="w-10 h-10 text-lg bg-gray-800 md:block hidden text-white rounded-full" @click="nextProject()">></button>
    </div>
    </div>


  </section>
</template>



<style scoped>

  .opacityProject{
    animation: opacityProjects 1.25s ease-in-out;
  }

  @keyframes opacityProjects{
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>